import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { House } from './../Models/house';

@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  authToken: any;
  constructor(private _HttpClient: HttpClient) {
    this.authToken = localStorage.getItem('userToken');
  }

  getAllProducts(): Observable<House[]> {
    return this._HttpClient
      .get<House[]>(`${environment.BaseApiURL}/houses`)
      .pipe(map((res: any) => res.data.houses));
  }
  getProduct(id: string): Observable<House> {
    return this._HttpClient
    .get<any>(`${environment.BaseApiURL}/houses/${id}`)
    .pipe(map((res: any) => res.data.house));
  }

getHouseByCategoryId(id:string):Observable<House[]>{
  return this._HttpClient.get<any>(`${environment.BaseApiURL}/houses/category/${id}`).pipe(map((res: any) => res.data.houses));
}

}
