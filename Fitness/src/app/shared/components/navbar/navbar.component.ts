import { Component, Input, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,public authS:AuthService,public infoS:InfoService) { }
  @Input () webSiteName:string|undefined;

  ngOnInit() {
    this.infoS.GetInfo()
  }

  goToAboutUs(){
   this.router.navigate(['aboutus'])
  }
  goTobestfood(){
    this.router.navigate(['bestfood'])
  }

  goToLogin(){
  this.router.navigate(['security/login'])
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

}
