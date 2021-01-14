import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from "./restaurant";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: 'restaurant-list.html'
})

export class RestaurantListComponent {
  @Input()
  restaurants: Array<Restaurant>;
  @Output()
  selected = new EventEmitter();
}
