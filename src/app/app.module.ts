import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './modules/products-list/products-list.component';
import { ProductService } from './core/service/product/product.service';
import { LoggerService } from './core/service/log/logger.service';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ErrorComponent } from './modules/error/error.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    HomeComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ProductService, LoggerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
