import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private spinner:NgxSpinnerService,public authService:AuthService) {
 
   }

  //  loginForm: FormGroup = new FormGroup({
  //   emailControl: new FormControl('', [Validators.required, Validators.email]),   
  //   passwordControl: new FormControl('', [Validators.required, Validators.minLength(8)])
  //   })

    // submit() {
    //   const formValue = this.loginForm.value;
    //   console.log(formValue)     
    // }


  ngOnInit(): void {
  }
  // remmember(){
  //   const formValue = this.loginForm.value;
  //   localStorage.setItem('data', JSON.stringify(formValue));
  // }


  goToSignUp(){
    this.router.navigate(['security/signup'])
  }
  


   
 

  
  




}