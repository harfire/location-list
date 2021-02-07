import React from 'react';
import type { Building } from 'types';
import { numberFormat } from 'utils/commons';
import { usePlace } from 'utils/contexts';

interface IBuilding {
  building: Building;
}

function PlaceBuilding({ building }: IBuilding) {
  const { selectedBuilding, setSelectedBuilding } = usePlace();

  const discountPrice = building?.discount?.amount
    ? building.startFrom - building?.discount?.amount
    : building.startFrom;
  const discountColor = building?.discount?.amount ? 'has-text-danger' : 'has-text-dark';

  const checkRoomAvailability = (room: number): JSX.Element => {
    if (room === 0) return <span className="tag is-rounded is-light is-grey">{`Unit Penuh`}</span>;
    if (room <= 5) return <span className="tag is-rounded is-light is-warning">{`Kurang dari 5 kamar tersisa`}</span>;
    if (room <= 2) return <span className="tag is-rounded is-light is-danger">{`Kamar Terbatas`}</span>;
    if (room > 5) return <span className="tag is-rounded is-light is-success">{`Kamar Tersedia`}</span>;

    return <div></div>;
  };

  return (
    <div className="column is-half">
      <div
        onClick={() => {
          setSelectedBuilding(building);
        }}
        className={selectedBuilding?.id === building?.id ? 'card items-list clicked' : 'card items-list'}
      >
        <div className="card-image">
          <img src={building.photoThumbnail} width="272" height="170" alt={building.name} />
        </div>
        <div className="card-content">
          <div className="content">
            <div className="m-b-15 p-0 is-size-7 city-info ellipsis is-ellipsis-1">
              {building.subdistrict.name}, {building.district.name}
            </div>
            <h5 className="p-0 m-b-10">{building.name}</h5>
            <div className={`has-text-weight-semibold ${discountColor}`}>
              <span className="has-text-grey">Mulai:&nbsp;</span>
              <span>{numberFormat(discountPrice)}</span>
            </div>
            {building?.discount?.amount && (
              <div style={{ textDecoration: 'line-through' }}>{numberFormat(building.startFrom)}</div>
            )}
            <div className="tag-cont has-text-weight-semibold">{checkRoomAvailability(building?.roomAvailability)}</div>
            <a
              href={`https://www.rukita.co/place/${selectedBuilding?.slug}`}
              target="_blank"
              onClick={() => {}}
              className="button is-small is-primary m-t-10"
            >
              Detail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceBuilding;
