import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class LoginComponent implements OnInit {


  constructor(private router:Router,private spinner:NgxSpinnerService,public authService:AuthService,private elementRef: ElementRef) {
 
   }
   ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
       .body.style.backgroundColor = '#f45b69';
 }




  ngOnInit(): void {

  }



  goToSignUp(){
    this.router.navigate(['security/signup'])
  }
  


   
 

  
  




}