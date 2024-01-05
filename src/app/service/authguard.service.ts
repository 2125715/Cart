import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService  implements CanActivate{

  constructor(private api: ApiService,private router:Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree  {
    if(this.api.isauthenticated()){
      return true;
    }
    else{
      return this.router.createUrlTree(['/login']);
      
    }
  }
}
