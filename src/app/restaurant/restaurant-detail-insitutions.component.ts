import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {Institution, Restaurant} from "./restaurant";

@Component({
  selector: 'app-restaurant-detail-institutions',
  templateUrl: 'restaurant-detail-institutions.html'
})

export class RestaurantDetailInstitutionsComponent implements OnInit {
  @Input()
  private restaurant: Restaurant;

  @Output()
  selected = new EventEmitter();

  private institutions: Array<Institution>;

  ngOnInit(): void {
    this.institutions = this.extractInstitution();
  }

  // todo: implement this
  addNewInstitution(): void {

  }

  extractInstitution(): Array<Institution> {
    let institutions = [];
    for(let key in this.restaurant.institutions) {
      institutions.push(this.restaurant.institutions[key]);
    }
    return institutions;
  }
}
