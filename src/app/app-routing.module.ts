import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './backend/users/users.component';
import { OrdersComponent } from './backend/orders/orders.component';
import { ServicesComponent } from './backend/services/services.component';


const routes: Routes = [  
  { path: 'all-users',  component: UsersComponent },
  { path: 'all-orders',  component: OrdersComponent },
  { path: 'all-services',  component: ServicesComponent },
  { path: '', redirectTo: 'all-users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
