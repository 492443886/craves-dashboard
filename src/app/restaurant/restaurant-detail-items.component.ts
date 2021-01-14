import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {Item, Restaurant} from "./restaurant";

@Component({
  selector: 'app-restaurant-detail-items',
  templateUrl: 'restaurant-detail-items.html'
})

export class RestaurantDetailItemsComponent implements OnInit {
  @Input()
  private restaurant: Restaurant;

  @Output()
  selected = new EventEmitter();

  private items: Array<Item>;

  ngOnInit(): void {
    this.items = this.extractItems();
  }

  // todo: implement this
  addNewInstitution(): void {

  }

  extractItems(): Array<Item> {
    let institutions = [];
    for(let key in this.restaurant.items) {
      institutions.push(this.restaurant.items[key]);
    }
    return institutions;
  }
}
