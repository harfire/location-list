import React from 'react';
import { GoogleMapProvider, InfoWindow, Marker, MapBox } from '@googlemap-react/core';
import type { Building } from 'types';
import { abbreviateNumber } from 'utils/commons';
import { usePlace } from 'utils/contexts';

const decoratedInfoWindow = (content: Building) => `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <span style="font-size: calc(10px + 0.8vh); text-align: left; padding: 0 0 8px 0; font-weight: 600">
        ${content.name}
      </span>
      <div style="height: 134px">
        <img src=${content.photoThumbnail} alt=${content.name} width="238px" />
      </div>
    </div>
  `;

function Maps({ data }: { data: Building[] }) {
  const { selectedBuilding, setSelectedBuilding } = usePlace();

  return (
    <GoogleMapProvider>
      <MapBox
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
        opts={{
          center: {
            lat: data[0].lat,
            lng: data[0].lon
          },
          zoom: 14
        }}
        style={{
          height: '78vh',
          width: '100%'
        }}
        useDrawing
        useGeometry
        usePlaces
        useVisualization
      />
      {data.map((v: Building) => (
        <Marker
          key={`marker-key-${v.id}`}
          id={`maps-marker-${v.id}`}
          opts={{
            draggable: false,
            label: v.discount?.amount!
              ? abbreviateNumber(v.startFrom - v.discount.amount)
              : abbreviateNumber(v.startFrom),
            position: { lat: v.lat, lng: v.lon },
            icon: {
              url: '../../images/conversation.svg',
              //@ts-ignore
              size: { width: 78, height: 40 }
            }
          }}
          onClick={() => {
            setSelectedBuilding(v);
          }}
        />
      ))}

      {selectedBuilding && (
        <InfoWindow
          anchorId={`maps-marker-${selectedBuilding.id}`}
          opts={{
            content: decoratedInfoWindow(selectedBuilding)
          }}
          visible={!!selectedBuilding}
          onCloseClick={() => {
            setSelectedBuilding(null);
          }}
        />
      )}
    </GoogleMapProvider>
  );
}

export default Maps;
