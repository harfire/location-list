import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import type { Place, Building } from 'types';
import { getPlaces } from 'services/services';
import Link from 'next/link';
import Maps from 'components/maps/Maps';
import Loading from 'components/common/Loading';
import useQuery from 'utils/useQuery';
import Title from 'components/common/Title';
import PlaceItem from 'components/common/PlaceBuilding';
import { PlaceProvider } from 'utils/contexts';

function Places() {
  const query = useQuery();

  const [isPageReady, setIsPageReady] = useState<boolean>(false);
  const [places, setPlaces] = useState<Place[]>(null!);
  const [selectedPlace, setSelectedPlace] = useState<Place>(null!);
  const [selectedBuilding, setSelectedBuilding] = useState<Building>(null!);

  useEffect(() => {
    void (async function fetchData() {
      await getPlaces()
        .then((res: Place[]) => {
          if (res) {
            setTimeout(() => setPlaces(res), 1000);
          }
        })
        .catch((error) => {
          // TODO: Error handle
        });
    })();
  }, []);

  useEffect(() => {
    if (query && !!places?.length) {
      const selected = places.find((v: Place) => v.id === query.id);

      if (selected) {
        setSelectedPlace(selected);
        setIsPageReady(true);
      }
    }
  }, [query, places]);

  return (
    <>
      <Head>
        <title>{selectedPlace.cityName}</title>
        <meta name="description" content={`Rukita sekitar ${selectedPlace.name}`}></meta>
        <meta property="og:title" content={selectedPlace.cityName} key="title" />
        <meta property="og:description" content={`Rukita sekitar ${selectedPlace.name}`} key="ogdesc" />
      </Head>

      <div className="columns is-multiline">
        {!isPageReady ? (
          <div className="column has-text-centered is-full">
            <Loading></Loading>
          </div>
        ) : (
          <PlaceProvider
            value={{
              places,
              selectedBuilding,
              setSelectedBuilding
            }}
          >
            <div className="column is-half items-cont">
              <div className="columns is-multiline place-item">
                <div className="column is-half">
                  <Title title="Daerah Sekitar" subTitle={selectedPlace.name} />
                </div>
                <div className="column is-half has-text-right">
                  <Link
                    href={{
                      pathname: `/location/`
                    }}
                  >
                    <a onClick={() => {}} className="button is-outlined is-primary">
                      Back
                    </a>
                  </Link>
                </div>
              </div>

              <div className="columns is-multiline place-item">
                {selectedPlace?.buildings?.map((building: Building) => (
                  <PlaceItem building={building} key={building.id} />
                ))}
              </div>
            </div>
            <div className="column is-half maps-cont">
              <Maps data={selectedPlace?.buildings}></Maps>
            </div>
          </PlaceProvider>
        )}
      </div>
    </>
  );
}

export default Places;
