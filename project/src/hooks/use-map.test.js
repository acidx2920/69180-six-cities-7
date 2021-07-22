import {renderHook} from '@testing-library/react-hooks';
import {useMap} from './use-map';

const mapRef = {};

const city = {
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
  name: 'Amsterdam',
};

describe('Hook: useMap', () => {
  it('should return object', () => {
    const {result} = renderHook(() =>
      useMap(mapRef, city),
    );

    expect(result).toBeInstanceOf(Object);
  });
});
