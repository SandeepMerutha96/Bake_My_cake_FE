import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderKartComponent } from './order-kart/order-kart.component';
import { LoginComponent } from './login/login.component';
import { OrderReportComponent } from './order-report/order-report.component';
import { canDeactivateGuardService } from './canDeacttivate-guard.service';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},// default path  
  {path:'order-report',component:OrderReportComponent},
  {path:'order',component:OrderKartComponent,canDeactivate:[canDeactivateGuardService]},
  {path:'orderKart/:id',component:OrderKartComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
