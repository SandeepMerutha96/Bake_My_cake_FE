import { Component } from '@angular/core';
import { OrderRequest } from '../models/order-req';
import { OrderRequestService } from '../services/order-request.service';
@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.component.html',
  styleUrls: ['./order-report.component.css']
})
export class OrderReportComponent {
  displayedColumns: string[] = ['id','OrderDate','customerName', 'customerEmail', 'customerPhone','caption','Quantity','Price'];
  orderRequests: OrderRequest[] = [];
  constructor(private orderRequestService: OrderRequestService) { }

  ngOnInit(): void {
    this.orderRequestService.getOrderReqeusts().subscribe({
      next: data => {
        this.orderRequests = data;
      },
      error: err => {
        alert(err);
      }
    });
  }
}
