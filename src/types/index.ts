export type LocationItem = {
  country?: string;
  lng?: number;
  city?: string;
  searchType?: string;
  alternative?: string[];
  index?: number;
  bookingId?: string;
  placeType?: string;
  placeKey?: string;
  iata?: string;
  countryIso?: string;
  locationId?: string;
  name?: string;
  ufi?: number;
  isPopular?: boolean;
  region?: string;
  lang?: string;
  lat?: number;
};

export type LocationResult = {
  results: {
    docs: Array<LocationItem>;
    isGooglePowered: boolean;
    numFound: number;
  };
};
