import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://jsonplaceholder.typicode.com/users";

  get_product_url = "http://localhost:3000/api/website/products/showAllProducts";

  constructor(private http:HttpClient) { }

  users()
  {
    return this.http.get(this.url);
  }



  get_product(data: any) {
    return this.http.post(this.get_product_url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
