import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-list',
  template:
    `
  <mat-list-item *ngFor="let order of orders" layout="row" class="pad-xs mat-title"
        (click)="selected.emit(order)" >
        {{ getOrderId(order.createdTime) }} : {{ order.customerID }}
     <mat-divider></mat-divider>
  </mat-list-item>
  `
})

export class OrderListComponent {
  @Input()
  orders: Array<any>;
  @Output()
  selected = new EventEmitter();

  constructor() {
  }

  getOrderId(creationTime: string): string {
    var ctimes = creationTime.split(' ');
    var dayTimes = ctimes[4].split(':');
    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var monthNum = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    return ctimes[3] + monthNum[month.indexOf(ctimes[1])] + ctimes[2] + dayTimes[0] + dayTimes[1] + dayTimes[2];
  }

  // getUserNameById(userId: string): string {
  //   var thisUser = this.users.find(e => e.Id === userId);
  //   return thisUser.firstName + ' ' + thisUser.lastName;
  // }
}
