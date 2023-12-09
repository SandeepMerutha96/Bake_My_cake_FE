import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { OrderKartComponent } from './order-kart/order-kart.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { OrderReportComponent } from './order-report/order-report.component';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { canDeactivateGuardService } from './canDeacttivate-guard.service';



@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,SearchComponent, OrderKartComponent, LoginComponent, OrderReportComponent
  ],
  imports: [
    BrowserModule,MatListModule,MatSidenavModule,MatToolbarModule,LayoutModule,MatFormFieldModule,MatTableModule,
    AppRoutingModule,MatSnackBarModule,
    BrowserAnimationsModule,MatCardModule,FormsModule,HttpClientModule,MatButtonModule,MatIconModule,RouterModule,DatePipe
  ],
  providers: [canDeactivateGuardService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
