import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// added imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule} from '@angular/material';
import { MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule } from '@covalent/core/steps';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

// other modules
import { OrderModule } from "./order/order.module";
import { UserModule } from "./user/user.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { GeneratorModule } from './generator/generator.module';

@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    GeneratorModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    routing,
    OrderModule,
    UserModule,
    RestaurantModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
