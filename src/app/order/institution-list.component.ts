import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Institution } from "./order";

@Component({
  selector: 'app-institution-list',
  template:
    `
  <mat-list-item *ngFor="let institution of institutions" layout="row" class="pad-xs mat-title"
        (click)="selected.emit(institution)" >
        {{ institution.name }}
     <mat-divider></mat-divider>
  </mat-list-item>
  `
})

export class InstitutionListComponent {
  @Input()
  institutions: Array<any>;
  @Output()
  selected = new EventEmitter();

  constructor() {
  }
}
