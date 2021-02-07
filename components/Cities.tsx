import React, { useState, useEffect } from 'react';
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
