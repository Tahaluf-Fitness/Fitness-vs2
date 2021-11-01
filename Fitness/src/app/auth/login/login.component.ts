import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
 
   }

   loginForm: FormGroup = new FormGroup({
    emailControl: new FormControl('', [Validators.required, Validators.email]),   
    passwordControl: new FormControl('', [Validators.required, Validators.minLength(8)])
    })

    submit() {
      const formValue = this.loginForm.value;
      console.log(formValue)     
    }


  ngOnInit(): void {
  }
  right_panel_active = false;

  toggleClass=(()=>{
    this.right_panel_active=!this.right_panel_active


  });
  


   
 

  
  




}