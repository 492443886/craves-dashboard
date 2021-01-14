import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// added imports
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';
import { MatToolbarModule, MatIconModule, MatListModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantHomeComponent } from './restaurant-home.component';
import { RestaurantListComponent } from "./restaurant-list.component";
import { RestaurantDetailComponent } from "./restaurant-detail.component";
import { RestaurantDetailGeneralComponent } from "./restaurant-detail-general.component";
import { RestaurantDetailInstitutionsComponent } from "./restaurant-detail-insitutions.component";
import { RestaurantDetailItemsComponent } from "./restaurant-detail-items.component";

@NgModule({
  declarations: [
    RestaurantHomeComponent,
    RestaurantListComponent,
    RestaurantDetailComponent,
    RestaurantDetailGeneralComponent,
    RestaurantDetailInstitutionsComponent,
    RestaurantDetailItemsComponent
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
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    ReactiveFormsModule
  ]
})
export class RestaurantModule { }
