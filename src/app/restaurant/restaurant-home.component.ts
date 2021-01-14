import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant';
import {FirebaseService} from "../firebase.service";

@Component({
  selector: 'app-restaurant',
  templateUrl: 'restaurant-home.html'
})

export class RestaurantHomeComponent implements OnInit {
  private restaurants;
  private showDetails: boolean;
  private msg: string;
  private selectedRestaurant: Restaurant;
  private baseUrl: string;

  constructor(public fs: FirebaseService) {
    this.showDetails = false;
    this.selectedRestaurant = null;
    this.baseUrl = 'Companies';
  }

  ngOnInit(): void {
    this.msg = 'Loading restaurants..';
    this.fetchRestaurants();
  }

  addNewRestaurant(): void {
    // TODO: Implement this function
    this.selectedRestaurant = { id: null, name: null, address: null, phoneNumber: null, email: null, baseServiceFee: null, serviceFeeRate: null, commissionRate: null, discountRate: null, contactName: null, deliverTimeWindow: null, institutions: null, items: null, isActive: null };
    this.showDetails = true;
    this.msg = `New Restaurant`;
  }

  cancelUpdate(msg: string): void {
    this.selectedRestaurant = null;
    this.showDetails = false;
    this.msg = `Operation cancelled`;
  }

  save(restaurant: Restaurant): void {
    // TODO: Implement this function
  }

  delete(restaurant: Restaurant): void {
    // TODO: Implement this function
  }

  selectRestaurant(restaurant: Restaurant): void {
    console.log('restaurant selected', restaurant);
    this.selectedRestaurant = restaurant;
    this.showDetails = true;
    this.msg = `Selected ${ restaurant.name }`;
  }

    fetchRestaurants() {
    // return this.http.get<Array<Restaurant>>('./src/app/restaurant/stubData.json');
    return this.fs.findAll(this.baseUrl).subscribe(
      payload => {
        this.msg = 'restaurants loaded';
        this.restaurants = payload;
        console.log('restaurants', this.restaurants);
      },
      err => { }
    )
  }
}
