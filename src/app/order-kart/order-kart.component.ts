import { ActivatedRoute, ParamMap } from '@angular/router';
import { ImageRouterService } from '../services/image-router.service'; 
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { OrderRequestService } from '../services/order-request.service'; 
import { OrderRequest } from '../models/order-req'; 
import { RouteService } from '../services/route.service';
import { ImageService } from '../services/image.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { Route } from '@angular/router';


@Component({
  selector: 'app-order-kart',
  templateUrl: './order-kart.component.html',
  styleUrls: ['./order-kart.component.css']
})
export class OrderKartComponent implements OnInit {
  //Reading parameter
  image:any;
  submitStatus:boolean=false;
  orderRequest: OrderRequest = {};
  
  constructor(private activatedRoute: ActivatedRoute,
    private imageService: ImageService,
    private orderRequestService: OrderRequestService,
    private routeService: RouteService,
    private snackBar: MatSnackBar,private route:Router,private imageRouter: ImageRouterService,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data:ParamMap) => {
      let id = data.get("id") ?? 0;
      this.imageService.getImage(+id).subscribe(data => {
          this.image = data; 
      });
  });
}


makeRequest() {
  if (this.orderRequest.OrderDate && this.orderRequest.customerName && this.orderRequest.customerEmail && this.orderRequest.customerPhone && this.orderRequest.Quantity)
   {
     this.orderRequest.caption=this.image?.caption; 
     this.orderRequest.Price=this.image?.Price; 
   this.orderRequestService.saveOrderRequest(this.orderRequest).subscribe({
       next: data => { this.snackBar.open("Order Placed successfully !!", "", { duration: 3000 });
          this.submitStatus = true;
          // this.routeService.navigateToHomeView();
  },
               error: err => {
                   alert(err); } });
           }
           else{
            this.submitStatus = false;
           }
           }
           
           canDeactivate(): boolean {
            if (!this.submitStatus) {
              return confirm(
                'You have not submitted a request to this order. Any details entered will be lost. Are you sure you want to leave?'
              );
            }
            return true;
          }

}
