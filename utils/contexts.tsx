import { Building, Place } from 'types';
import { createStrictContext } from 'utils/createStrictContext';

// Place Context
interface IPlaceContext {
  places: Place[];
  selectedBuilding: Building;
  setSelectedBuilding: (val: Building) => void;
}

export const [PlaceProvider, usePlace] = createStrictContext<IPlaceContext>({
  contextName: 'PlaceContext'
});
