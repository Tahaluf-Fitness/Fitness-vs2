import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AutheraizationGuard implements CanActivate {
  constructor(private route:Router,private toastr:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token=localStorage.getItem('token');

      if(token){
        if(state.url.indexOf('admin')>=0){
          let user:any=localStorage.getItem('user');
          if(user){
            user=JSON.parse(user);
            if(user.role=='admin'){
              return true;
            } else{
              this.toastr.warning('this page for Admin');
              this.route.navigate([''])

              return false;
            }
          } else{
            this.toastr.warning('this page for Admin');
            return false;
          }
        }
      
      else if(state.url.indexOf('client')>=0){
        let user:any=localStorage.getItem('user');
        if(user){
          user=JSON.parse(user);
          if(user.role=='client'){
            return true;

          }else{
            this.toastr.warning('this page for Client');
            this.route.navigate([''])
            return false;
          }

        } else{
          this.toastr.warning('this page for Client');
          return false;
        }
      }

      else if(state.url.indexOf('accountant')>=0){
        let user:any=localStorage.getItem('user');
        if(user){
          user=JSON.parse(user);
          if(user.role=='accountant'){
            return true;

          }else{
            this.toastr.warning('this page for Accountant');
            this.route.navigate([''])

            return false;
          }

        } else{
          this.toastr.warning('this page for Accountant');
          return false;
        }
      }
      return true;

    }
      else{
        this.toastr.warning('You Are Not Autherized');
        this.route.navigate(['security/login'])
      }

    return true;
  }
  
}
