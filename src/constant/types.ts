export interface PropertyProps {
  id?: number;
  unit: string;
  street_number: string;
  street_name: string;
  suburb: string;
  state: string;
  country: string;
  postcode: string;
  include_address_in_copy: boolean;
  property_type: number;
  land_size: number;
  land_size_unit: number;
  target_market: string;
  features: string;
}

export interface PropertyPropsResponse {
  id?: number;
  unit: string;
  street_number: string;
  street_name: string;
  suburb: string;
  state: string;
  country: string;
  postcode: string;
  include_address_in_copy: boolean;
  property_type: number;
  land_size: number;
  land_size_unit: number;
  target_market: string;
  features: string;
  description: Array<{}>;
  beds: number;
  baths: number;
  parking_spaces: number;
}

export interface StatesProps {
  id: number;
  name: string;
  country: string;
  acronym: string;
}

export const propertyTypes = [
  { title: "HOUSE", name: "House", value: 1 },
  { title: "UNIT", name: "Apartment/Unit", value: 2 },
  { title: "VILLA", name: "Villa", value: 3 },
  { title: "ACERAGE", name: "Acerage", value: 4 },
  { title: "BLOCK_OF_UNITS", name: "Block Of Units", value: 5 },
  { title: "TOWNHOUSE", name: "Townhouse", value: 6 },
  { title: "LAND", name: "Land", value: 7 },
  { title: "RURAL", name: "Rural", value: 8 },
  { title: "RETIREMENT_LIVING", name: "Retirement Living", value: 9 },
];

export const landSizeUnits = [
  { title: "SQUARE_METERS", name: "Square Meters", value: 1 },
  { title: "ACRES", name: "Acres", value: 2 },
  { title: "HECTARES", name: "Hectares", value: 3 },
];
