import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adminCode:string="";
  isLoggedIn: boolean = false;
  constructor(private authService: AuthService, private routeService: RouteService) { }

  ngOnInit(): void {
  }
  validateAdminCode() {
    this.authService.login(this.adminCode);
    if(this.authService.isLoggedIn) {
        this.routeService.navigateToOrderRequestsView();
    }
}
}
