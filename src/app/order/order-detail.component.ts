import { Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import { Order } from "./order";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ValidateEmail, ValidatePhone } from "../validators/validators";


@Component({
  selector: 'app-order-detail',
  templateUrl: 'order-detail.html'
})

export class OrderDetailComponent implements OnInit {
  @Input()
  private order: Order;
  @Output()
  private cancelled = new EventEmitter();
  @Output()
  private saved = new EventEmitter();
  @Output()
  private deleted = new EventEmitter();

  private orderForm: FormGroup;

  constructor(private  builder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.patchForm();
  }

  private initForm(): void {
    this.orderForm = this.builder.group({
      createdTime: ['', [ Validators.required ]],
      customerID: ['', [ Validators.required ]],
      deliverTimeWindow: ['', [ Validators.required ]],
      deliveryFee: ['', [ Validators.required, ValidatePhone ]],
      deliveryLocation: ['', [ Validators.required, ValidateEmail ]],
      isFlagged: ['', [ Validators.required ]],
      isUpdated: ['', [ Validators.required ]],
      orderStatus: ['', [ Validators.required ]],
      restaurantDiscount: ['', [ Validators.required ]],
      restaurantName: ['', [ Validators.required ]],
      commissionRestaurant: ['', [ Validators.required ]],
      commissionUser: ['', [ Validators.required ]],
      subtotal: ['', [ Validators.required ]],
      tax: ['', [ Validators.required ]],
      tip: ['', [ Validators.required ]],
      total: ['', [ Validators.required ]],
      // isActive: ['', [ Validators.required ]],
      // isPast: ['', [ Validators.required ]]
    });
  }

  private patchForm(): void {
    this.orderForm.patchValue( {
      createdTime: this.order.createdTime,
      customerID: this.order.customerID,
      deliverTimeWindow: this.order.deliverTimeWindow,
      deliveryFee: this.order.deliveryFee,
      deliveryLocation: this.order.deliveryLocation,
      isFlagged: this.order.isFlagged,
      isUpdated: this.order.isUpdated,
      orderStatus: this.order.orderStatus,
      restaurantDiscount: this.order.restaurantDiscount,
      restaurantName: this.order.restaurantName,
      commissionRestaurant: this.order.commission.restaurant,
      commissionUser: this.order.commission.user,
      subtotal: this.order.subtotal,
      tax: this.order.tax,
      tip: this.order.tip,
      total: this.order.total,
      // isActive: this.order.isActive,
      // isPast: this.order.isPast
    });
  }

  get f() {
    return this.orderForm.controls;
  }

  shouldDisplayHint(formControl) {
    let field = this.f[formControl];
    //return field.errors && (field.dirty || field.touched);
    return false;
  }

  displayHint(name: string): string {
    return `${name} is required`;
  }

  updateSelectedUser(): void {
    const frmJson = this.orderForm.getRawValue();
    this.order.createdTime = frmJson.createdTime;
    this.order.customerID= frmJson.customerID;
    this.order.deliverTimeWindow = frmJson.deliverTimeWindow;
    this.order.deliveryFee = frmJson.deliveryFee;
    this.order.deliveryLocation = frmJson.deliveryLocation;
    this.order.isFlagged = frmJson.isFlagged;
    this.order.isUpdated = frmJson.isUpdated;
    this.order.orderStatus = frmJson.orderStatus;
    this.order.restaurantDiscount = frmJson.restaurantDiscount;
    this.order.restaurantName = frmJson.restaurantName;
    this.order.commission.restaurant = frmJson.commissionRestaurant;
    this.order.commission.user = frmJson.commissionUser;
    this.order.subtotal = frmJson.subtotal;
    this.order.tax = frmJson.tax;
    this.order.tip = frmJson.tip;
    this.order.total = frmJson.total;
    // this.order.isActive = frmJson.isActive;
    // this.order.isPast = frmJson.isPast;
    this.saved.emit(this.order);
  }
}
