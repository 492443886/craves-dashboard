import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Restaurant } from "./restaurant";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-restaurant-detail-general',
  templateUrl: 'restaurant-detail-general.html'
})

export class RestaurantDetailGeneralComponent implements OnInit {
  @Input()
  private restaurant: Restaurant;
  @Input()
  private restaurantGeneralForm: FormGroup;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.patchForm();
  }

  private patchForm(): void {
    this.restaurantGeneralForm.patchValue({
      id: this.restaurant.id,
      name: this.restaurant.name,
      address: this.restaurant.address,
      phoneNumber: this.restaurant.phoneNumber,
      email: this.restaurant.email,
      baseServiceFee: this.restaurant.baseServiceFee,
      serviceFeeRate: this.restaurant.serviceFeeRate,
      commissionRate: this.restaurant.commissionRate,
      discountRate: this.restaurant.discountRate,
      contactName: this.restaurant.contactName,
      deliverTimeWindow: this.restaurant.deliverTimeWindow,
      isActive: this.restaurant.isActive
    });
  }

  get f() {
    return this.restaurantGeneralForm.controls;
  }

  shouldDisplayHint(formControl) {
    let field = this.f[formControl];
    return field.errors && (field.dirty || field.touched);
  }

  displayHint(name: string): string {
    return `${name} is required`;
  }
}
