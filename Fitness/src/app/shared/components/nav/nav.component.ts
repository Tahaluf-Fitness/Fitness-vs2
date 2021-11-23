import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router,public authS:AuthService,public infoS:InfoService) { }

  @Input () webSiteName:string|undefined;

  ngOnInit() {
    this.infoS.GetInfo()
  }

  goToAboutUs(){
   this.router.navigate(['aboutus'])
  }

  goToDashboard(){
    const tokenString = localStorage.getItem('token') || 'invalid token';
    let token:any=jwtDecode(tokenString);  
    let role= token.roleName
    if(role='admin') {
      this.router.navigate(['admin'])
    }
    if(role='client') {
      this.router.navigate(['client'])
    }
  
  }

  goToLogin(){
  this.router.navigate(['security/login'])
  }

  goToHome(){
    this.router.navigate([''])

  }

  goToDiet(){
    this.router.navigate(['diet'])

  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  goToBestFood(){
    this.router.navigate(['bestfood'])
  }


}
