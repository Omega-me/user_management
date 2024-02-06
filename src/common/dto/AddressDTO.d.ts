export interface AddressDTO {
  street: string;
  city: string;
  zipcode: string;
  geo?: GeoDTO;
}

export interface GeoDTO {
  lat?: number;
  lng?: number;
}
