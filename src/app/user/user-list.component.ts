import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from "./user";

@Component({
  selector: 'app-user-list',
  template:
  `
  <mat-list-item *ngFor="let user of users" layout="row" class="pad-xs mat-title"
        (click)="selected.emit(user)" >
      {{ user.firstName }} {{ user.lastName }}
     <mat-divider></mat-divider>
  </mat-list-item>
  `
})

export class UserListComponent {
  @Input()
  users: Array<any>;
  @Output()
  selected = new EventEmitter();

  constructor() {
  }
}
