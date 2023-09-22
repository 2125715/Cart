import { NgLocaleLocalization } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { map, Observable, reduce } from 'rxjs';
import { CartService } from './cart.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  @Input()
  username!: string;

  private userKey = 'current_user';
  constructor(private http: HttpClient, private cartService: CartService, private router: Router) { }


  register(username: string, email: string, password: string) {
    const body = { username, email, password };
    return this.http.post('http://localhost:5081/api/Register', body);
  }

  login(username: string, password: string) {
    const body = { username, password };
    return this.http.post('http://localhost:5081/api/Login', body);

  }
  logout() {
    
    this.router.navigate(['/login'])
  }

  
  checkUsernameAvailability(username: string): Observable<boolean> {
    return this.http.get<boolean>('http://localhost:5081/api/Register/check-username?username=$(username)');
  }
  getProduct() {
    return this.http.get<any>('http://localhost:5152/api/Product')
      .pipe(map((res: any) => {
        return res;
      }))
  }

  addProduct(product: any): Observable<any> {
    return this.http.post('http://localhost:5152/api/Product', product);
  }


}
