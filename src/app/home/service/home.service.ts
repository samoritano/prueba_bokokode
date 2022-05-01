import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService{

  constructor(
    private http: HttpClient
  ) { }

  async getProducts(page: number){
    return await axios.get(`${environment.url}/products?page=${page}`)
  }

}
