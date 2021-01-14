import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// added imports
import { MatButtonModule, MatCardModule, MatMenuModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatToolbarModule, MatTooltipModule, MatIconModule, MatListModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CovalentDataTableModule, CovalentExpansionPanelModule } from "@covalent/core";
import { OrderHomeComponent } from './order-home.component';
import { InstitutionListComponent } from './institution-list.component';
import { OrderListComponent } from './order-list.component';
import {HomeComponent} from "../home/home.component";
import {UserModule} from "../user/user.module";
import {OrderUserListComponent} from "./order-user-list.component";
import {OrderDetailComponent} from "./order-detail.component";
import {OrderItemListComponent} from "./order-item-list.component";

@NgModule({
  declarations: [
    OrderHomeComponent, InstitutionListComponent, OrderListComponent, OrderUserListComponent, OrderDetailComponent, OrderItemListComponent
  ],
  imports: [
    MatSelectModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    CovalentDataTableModule,
    CovalentExpansionPanelModule,
    UserModule
  ]
})
export class OrderModule { }
