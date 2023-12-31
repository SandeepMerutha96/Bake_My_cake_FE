import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }

  navigateToHomeView() {
    this.router.navigate(["/home"]);
  }
  navigateToOrderRequestsView() {
    this.router.navigate(["order-report"]);
  }
  navigateToLoginView() {
    this.router.navigate(["login"]);
}
}
