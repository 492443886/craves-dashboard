import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-item-list',
  template:
    `
  <mat-list-item *ngFor="let item of items" layout="row" class="pad-xs mat-title" >
      {{ item.name }}, {{ item.type }}, {{ item.size }}, {{ item.quantity }}, {{ item.price }}
     <mat-divider></mat-divider>
  </mat-list-item>  
  `
})

export class OrderItemListComponent {
  @Input()
  items: Array<any>;

  constructor() {
  }
}
