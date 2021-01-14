
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
import { GeneratorHomeComponent } from './generator-home.component';
import { MonthReportComponent } from './month-report.component';

@NgModule({
  declarations: [
    GeneratorHomeComponent, MonthReportComponent
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
export class GeneratorModule { }
