export interface Restaurant {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  baseServiceFee: number;
  serviceFeeRate: number;
  commissionRate: number;
  discountRate: number;
  contactName: string;
  deliverTimeWindow: number; // courier has to deliver within this time
  institutions: Array<Institution>;
  items: Array<Item>;
  isActive: boolean;
}

export interface Item {
  id: string; // dont have this yet in db
  name: string;
  description: string;
  itemCategory: string;
  sizes: Array<Size>;
  types: Array<string>;
}

export interface Size {
  price: number;
  size: string;
}

export interface Institution {
  id: string; //fanshawe, western
  name: string; // doesn't exist yet
  tax: number; // this depends on institution locations (province)
  locations: Location;
}

export interface Location {
  latitude: number;
  longitude: number;
}
