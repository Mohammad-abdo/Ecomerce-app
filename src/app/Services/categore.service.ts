import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { category } from './../Models/category';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoreService {

  constructor(private _HttpClient:HttpClient) { }

getAllCategories():Observable<category[]>
{
  return this._HttpClient.get<any>(`${environment.BaseApiURL}/categories`).pipe(map((res: any) => res.data.categories))
}
getCategory(id:string):Observable<category>{
  return this._HttpClient.get<any>(`${environment.BaseApiURL}/categories/${id}`).pipe(map((res: any) => res.data.category))
}

}
