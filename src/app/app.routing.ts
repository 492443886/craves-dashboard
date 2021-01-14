import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderHomeComponent } from './order/order-home.component';
import { UserHomeComponent } from "./user/user-home.component";
import { RestaurantHomeComponent } from "./restaurant/restaurant-home.component";
import { GeneratorHomeComponent } from './generator/generator-home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UserHomeComponent },
  { path: 'orders', component: OrderHomeComponent },
  { path: 'restaurants', component: RestaurantHomeComponent },
  { path: 'generator', component: GeneratorHomeComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
