import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private spinner:NgxSpinnerService,private router:Router,private http:HttpClient) { }

  email=new FormControl('');
  password=new FormControl('');
  isLoggedin: boolean = false;


  // remmember(){
  //   const emailcontrol=this.email.value;
  //   const passwordControl=this.password.value;
  //   const data = {
  //     emailcontrol,
  //     passwordControl
  //   }
  //   localStorage.setItem('data', JSON.stringify(data));
  // }

  submit(){

    var responce1:any;
    var body={
      email:this.email.value.toString(),
      password:this.password.value.toString()
    };
    const headerDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDict)
    }
    console.log(body);
      this.spinner.show();
      setTimeout(()=>{
        this.http.post('https://localhost:44303/api/jwt',body,requestOptions).subscribe((res:any)=>{
          responce1=res;
          const responce={
            token:responce1.toString()
          };
            localStorage.setItem('token',responce.token);
            let data:any=jwtDecode(responce.token);//username: rolename
            console.log(data);
            //var str=JSON.stringify({...data});
         localStorage.setItem('user',JSON.stringify({...data}));
           if(data.role=='admin'){
             this.router.navigate(['admin']);
           }
           else if(data.role=='accountant'){
            this.router.navigate(['accountant']);
          }
           else if(data.role=='client'){
             this.router.navigate(['client']);
           }
           
          })
              this.spinner.hide();
         },200); 

     
    }

    getCurrentUser(){
      const tokenString = localStorage.getItem('token') || 'invalid token';
      let token:any=jwtDecode(tokenString);
      let id:number = parseInt(token.UserID)
      return id      
    }

    isLoggedIn() {
      if (localStorage.getItem("token") == null) {
        this.isLoggedin = false;
        return this.isLoggedin;
      }
      else {
        return true;
      }
    }

    logout(){
      this.spinner.show();
      setTimeout(()=>{
        localStorage.clear();
        this.spinner.hide();
      },300)
      this.router.navigate(['/security/login']);
    }

    
}
