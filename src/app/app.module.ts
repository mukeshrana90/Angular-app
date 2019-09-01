import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './backend/users/users.component';
import { HeaderComponent } from './backend/common/header/header.component';
import { ServicesComponent } from './backend/services/services.component';
import { OrdersComponent } from './backend/orders/orders.component';
import { AddServicesComponent } from './backend/services/add-services/add-services.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    ServicesComponent,
    OrdersComponent,
    AddServicesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
