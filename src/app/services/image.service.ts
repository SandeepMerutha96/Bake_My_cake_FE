import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class ImageService {
  URL: string = "http://localhost:3000/Images";

  constructor(private http: HttpClient) { }

  getImages(): Observable<Array<Image>> {
    return  this.http.get<Array<Image>>(this.URL);
  }
  
  getImage(id?: number): Observable<Image> {
   let x= this.http.get<Image>(`${this.URL}/${id}`);
   return x;
    }
    getOrder(id?:number) : Observable<Image>{
      return this.http.get<Image>(`${this.URL}/${id}`);
    }

  }

  

  

