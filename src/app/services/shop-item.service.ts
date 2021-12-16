import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopItemService {
  readonly baseURL:string = "http://localhost:8000/app";  

  constructor(private http: HttpClient) { }

  getItemById(id: number) : Observable<any> {
    return this.http.get<any>(this.baseURL + '/shop/' + id);
  }

  getItems() : Observable<any> {
    return this.http.get<any>(this.baseURL + '/shop');
  }
}
