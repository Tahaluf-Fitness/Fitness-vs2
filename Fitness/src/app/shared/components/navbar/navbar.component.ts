import { Component, Input, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,public authS:AuthService,public infoS:InfoService,private spinner:NgxSpinnerService) { }
  @Input () webSiteName:string|undefined;

  ngOnInit() {
    this.infoS.GetInfo()
  }

  goToHome(){
    this.router.navigate([''])

  }
  goToBestFood(){
    this.router.navigate(['bestfood'])
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

  goToAboutUs(){
   this.router.navigate(['aboutus'])
  }
  

  goToLogin(){
  this.router.navigate(['security/login'])
  }

  goToDiet(){
    this.router.navigate(['diet'])

  }
  logout(){
    this.spinner.show();
      setTimeout(()=>{
        localStorage.clear();
        this.spinner.hide();
      },200)
      this.router.navigate(['']);
    }


  }


