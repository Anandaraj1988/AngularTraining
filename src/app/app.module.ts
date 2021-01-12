import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './modules/products-list/products-list.component';
import { ProductService } from './core/service/product/product.service';
import { LoggerService } from './core/service/log/logger.service';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ErrorComponent } from './modules/error/error.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HtpclientsampleComponent } from './modules/htpclientsample/htpclientsample.component';
import { ConfigService } from './core/service/configService/config.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    HomeComponent,
    ContactComponent,
    ErrorComponent,
    HtpclientsampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ProductService, LoggerService, ConfigService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
