import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
 
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private elementRef: ElementRef,private spiner:NgxSpinnerService,private toastr:ToastrService,private http:HttpClient) { }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
       .body.style.backgroundColor = '#63738a';
 }

 ngOnInit(): void {
}

formGroup =new FormGroup({
  firstName:new FormControl('',Validators.required),
  lastName:new FormControl('',Validators.required),
  password: new FormControl('', [Validators.required,  Validators.minLength(8)]),
  confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  email: new FormControl('', [Validators.required, Validators.email]), 
  gender:new FormControl('',Validators.required),
  dateOfBirth:new FormControl('')
})

addUser(data:any){
  this.spiner.show();
  this.http.post('https://localhost:44303/api/user/',data).subscribe((res:any)=>{
    this.toastr.success('User created successfuly');
    this.spiner.hide();
    window.location.reload();
    this.router.navigate(['security/login'])



  },err=>{
   this.spiner.hide();
   this.toastr.error('User not created');

  })
  
}

firstName1:any;
lastName1:any;
email1:any;
gender1:any;
dateOfBirth1:Date | undefined
password1:any
confirmpassword1:any
roleID=4

saveItem(){
  this.firstName1=this.formGroup.value.firstName;
  this.lastName1=this.formGroup.value.lastName;
  this.email1=this.formGroup.value.email;
  this.gender1=this.formGroup.value.gender;
  this.dateOfBirth1=this.formGroup.value.dateOfBirth;
  this.password1=this.formGroup.value.password
  this.confirmpassword1=this.formGroup.value.confirmpassword

  const data={
    firstName:this.firstName1.toString(),
    lastName:this.lastName1.toString(),
    email:this.email1.toString(),
    gender:this.gender1.toString(),
    password:this.password1.toString(),
    confirmpassword:this.confirmpassword1.toString(),
    dateOfBirth:this.dateOfBirth1,
    roleID:this.roleID
  }

  this.addUser(data);
debugger
}


  goToSignIn(){
    this.router.navigate(['security/login'])
  }
}
