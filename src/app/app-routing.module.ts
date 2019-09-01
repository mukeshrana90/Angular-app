import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './backend/users/users.component';
import { OrdersComponent } from './backend/orders/orders.component';
import { ServicesComponent } from './backend/services/services.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';


const routes: Routes = [  
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'all-users',  component: UsersComponent },
  { path: 'all-orders',  component: OrdersComponent },
  { path: 'all-services',  component: ServicesComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
