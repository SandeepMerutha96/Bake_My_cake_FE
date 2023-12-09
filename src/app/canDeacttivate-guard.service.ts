import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { OrderKartComponent } from "./order-kart/order-kart.component";
import { Observable } from "rxjs";

export class canDeactivateGuardService implements CanDeactivate<OrderKartComponent>{
    canDeactivate(component: OrderKartComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}