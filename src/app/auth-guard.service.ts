import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService:AuthService,private router:Router) { }
canActivate(route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot)
   : boolean | Observable<boolean> | Promise<boolean> {
  return this.authService.isAuthenticated()
  .then(
    (authenticated)=>{
    if(authenticated){
      return true
    }else{
      this.router.navigate(['/']);
      return false;
    }
  });
  
}


canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
:boolean | Observable<boolean>|Promise<boolean> {
  return this.canActivate(route,state);
}




}
