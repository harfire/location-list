import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Loading from 'components/common/Loading';
import ThumbnailCity from 'components/common/ThumbnailCity';
import { getCities } from 'services/services';
import Title from 'components/common/Title';
import type { Cities } from 'types';

function Main() {
  const [cities, setCities] = useState<Cities[]>(null!);

  useEffect(() => {
    void (async function fetchData() {
      await getCities()
        .then((res: Cities[]) => {
          setTimeout(() => setCities(res), 1000);
        })
        .catch((error) => {
          // TODO: Error handle
        });
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Lokasi - Rukita | Coliving Nyaman di Tengah Kota | Cari Kost dan Apartemen di Sini</title>
        <meta
          name="description"
          content="Lokasi - Rukita | Coliving Nyaman di Tengah Kota | Cari Kost dan Apartemen di Sini"
        ></meta>
        <meta
          property="og:title"
          content="Lokasi - Rukita | Coliving Nyaman di Tengah Kota | Cari Kost dan Apartemen di Sini"
          key="title"
        />
        <meta
          property="og:description"
          content="Lokasi - Rukita | Coliving Nyaman di Tengah Kota | Cari Kost dan Apartemen di Sini"
          key="ogdesc"
        />
      </Head>

      {!!cities?.length ? (
        <>
          <Title title="Jelajahi" subTitle="Area Populer" />
          <div className="columns is-multiline cities">
            {cities.map((v: Cities) => (
              <ThumbnailCity data={v} key={`city-${v.id}`} />
            ))}
          </div>
        </>
      ) : (
        <div className="column has-text-centered is-full">
          <Loading />
        </div>
      )}
    </>
  );
}

export default Main;
