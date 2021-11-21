import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  goToLogin(){
  this.router.navigate(['security/login'])
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

}
