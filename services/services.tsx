import { Cities, Place } from 'types';
import cities from 'dummy-data/cities';
import places from 'dummy-data/places';

export const getCities = (): Promise<Cities[]> => {
  return Promise.resolve(cities);
};

export const getPlaces = (): Promise<Place[]> => {
  return Promise.resolve(places);
};
