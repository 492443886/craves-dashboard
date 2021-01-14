import {Item} from "../restaurant/restaurant";

export interface Order {
  createdTime: string;
  customerID: string;
  deliverTimeWindow: number;
  deliveryFee:number;
  deliveryLocation: string;
  isFlagged: boolean;
  isUpdated: boolean;
  items: Array<Item>;
  orderStatus: string;
  restaurantDiscount: number;
  restaurantName: string;
  commission: Commission;
  subtotal: number;
  tax: number;
  tip: number;
  total: number;

  // isActive: boolean;
  // isPast: boolean;


}

export interface Commission {
  restaurant: number;
  user: number;
}

export interface Institution {
  id: string;
  name: string;
  tax: number;
}

export interface OrderItem {
  name: string;
  note: string;
  price: number;
  quantity: number;
  size: string;
  type: string;
}
