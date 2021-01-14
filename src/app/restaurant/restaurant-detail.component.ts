import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Restaurant } from "./restaurant";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ValidatePhone, ValidateEmail } from '../validators/validators'

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: 'restaurant-detail.html'
})

export class RestaurantDetailComponent implements OnInit {
  @Input()
  private restaurant: Restaurant;
  @Output()
  private cancelled = new EventEmitter();
  @Output()
  private saved = new EventEmitter();
  @Output()
  private deleted = new EventEmitter();

  private restaurantForm: FormGroup;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.patchForm();
  }

  // TODO: Add validator for rates. Gotta be less than 1.0 always
  private initForm(): void {
    this.restaurantForm = this.builder.group({
      id: ['', [ Validators.required ]],
      name: ['', [ Validators.required ]],
      address: ['', [ Validators.required ]],
      phoneNumber: ['', [ Validators.required, ValidatePhone ]],
      email: ['', [ Validators.required, ValidateEmail ]],
      baseServiceFee: ['', [ Validators.required ]],
      serviceFeeRate: ['', [ Validators.required ]],
      commissionRate: ['', [ Validators.required ]],
      discountRate: ['', [ Validators.required ]],
      contactName: ['', [ Validators.required ]],
      deliverTimeWindow: ['', [ Validators.required ]],
      institutions: ['', [ Validators.required ]],
      items: ['', [ Validators.required ]],
      isActive: ['', [ Validators.required ]]
    });
  }

  private patchForm(): void {
    this.restaurantForm.patchValue({
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
      institutions: this.restaurant.institutions,
      items: this.restaurant.items,
      isActive: this.restaurant.isActive
    });
  }

  get f() {
    return this.restaurantForm.controls;
  }

  shouldDisplayHint(formControl) {
    let field = this.f[formControl];
    return field.errors && (field.dirty || field.touched);
  }

  updateSelectedRestaurant(): void {
    // TODO: implement
  }
}
