import {NameSpace} from '../root-reducer';

export const getActiveSorting = (state) => state[NameSpace.OFFERS].activeSorting;
export const getActiveCity = (state) => state[NameSpace.OFFERS].activeCity;
