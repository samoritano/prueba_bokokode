import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService{

  constructor(
    private http: HttpClient
  ) { }

  getProducts(){
    return this.http.get(`${environment.url}/products`);
  }

}
