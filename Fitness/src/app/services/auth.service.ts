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

//   submit(){
//     const emailcontrol=this.email.value;
//     const passwordControl=this.password.value;
//     this.spinner.show() 
//     console.log(emailcontrol,passwordControl);

//     setTimeout(()=>{
//       this.router.navigate(['client'])
//       this.spinner.hide();
//  },700); 

//   }

  remmember(){
    const emailcontrol=this.email.value;
    const passwordControl=this.password.value;
    const data = {
      emailcontrol,
      passwordControl
    }
    localStorage.setItem('data', JSON.stringify(data));
  }

 

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
          this.spinner.hide()
          responce1=res;
          const responce={
            token:responce1.toString()};
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
         },400); 

     
    }
}
