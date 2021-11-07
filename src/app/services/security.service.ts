import { Usuario } from '../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  URL = "https://rest-api-parcial.herokuapp.com";
  constructor(private http : HttpClient) { }

  login(userName: string ){
    return this.http.post<any>(this.URL + '/login',userName);
  }

  logout(){
    localStorage.removeItem('token');
  }

  logedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
