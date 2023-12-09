import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderRequest } from '../models/order-req';
@Injectable({
  providedIn: 'root'
})
export class OrderRequestService {

  URL: string = "http://localhost:3000/OrderRequest";

  constructor(private http: HttpClient) { }
  getOrderReqeusts() : Observable<Array<OrderRequest>> {
    return this.http.get<Array<OrderRequest>>(`${this.URL}`);
  }

  saveOrderRequest(orderRequest? : OrderRequest) : Observable<OrderRequest> {
    return this.http.post<OrderRequest>(`${this.URL}`, orderRequest)
  }


}
