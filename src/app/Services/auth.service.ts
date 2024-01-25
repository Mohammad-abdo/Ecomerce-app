import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs'
import { User } from '../Models/user';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData=new BehaviorSubject(null)
  authToken:any
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
   this.authToken = localStorage.getItem('userToken')
   if(this.authToken !== null){
    this.DecodeUserData()
   }
  }

  DecodeUserData(){
    let decode=JSON.stringify(localStorage.getItem('userToken'))
    let decodedData:any=jwtDecode(decode)
    console.log(decodedData);

 this.userData.next(decodedData)
  }
logOut(){
  localStorage.removeItem("userToken")
  this.userData.next(null)
  this._Router.navigate(['/login'])
}
  register(user:User):Observable<any>
  {
return this._HttpClient.post(`${environment.BaseApiURL}/users/signup`,user)
  }
  signin(user:User):Observable<any>
  {
return this._HttpClient.post(`${environment.BaseApiURL}/users/signin`,user)
  }
  getUser(id:number):Observable<any>
  {
return this._HttpClient.get(`${environment.BaseApiURL}/users/getMe/${id}`,
{
  headers:{
      Authorization:`token=${this.authToken}`,
      "Content-Type": "application/json",
    }
})
  }
}
