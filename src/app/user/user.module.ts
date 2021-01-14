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
  MatToolbarModule
} from '@angular/material';
import { MatTooltipModule, MatIconModule, MatListModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserHomeComponent } from './user-home.component';
import { UserDetailComponent } from "./user-detail.component";
import { CovalentDataTableModule, CovalentExpansionPanelModule } from "@covalent/core";
import { UserListComponent } from "./user-list.component";


@NgModule({
  declarations: [
    UserHomeComponent, UserDetailComponent, UserListComponent
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
    ReactiveFormsModule,
    CovalentExpansionPanelModule,
    MatTooltipModule,
    CovalentDataTableModule

  ]
})
export class UserModule { }
