import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getProduct() {
    return this.http.get<any>('http://localhost:5152/api/Product')
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
