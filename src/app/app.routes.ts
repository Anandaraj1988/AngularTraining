import { Routes } from '@angular/router';
 
import { HomeComponent} from './modules/home/home.component';
import { ContactComponent} from './modules/contact/contact.component';
import { ProductsListComponent } from './modules/products-list/products-list.component';
import { ErrorComponent} from './modules/error/error.component';
import { HtpclientsampleComponent } from './modules/htpclientsample/htpclientsample.component';
 
export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductsListComponent },
  { path: 'config', component: HtpclientsampleComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];