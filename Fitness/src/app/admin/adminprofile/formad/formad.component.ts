import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-formad',
  templateUrl: './formad.component.html',
  styleUrls: ['./formad.component.css']
})
export class FormadComponent implements OnInit {

  @Input () userID:number|undefined;
  @Input () firstName:string|undefined;
  @Input () lastName:string|undefined;
  @Input () email:string|undefined;
  @Input () gender:string|undefined;
  @Input () phoneNumber1:number|undefined;
  @Input () dateOfBirth:Date|undefined;
  @Input () password:string|undefined;
  @Input () confirmPassword:string|undefined;
  @Input () country:string|undefined;
  @Input () city:string|undefined;

  constructor(private router:Router,public profileS:ProfileService,private http:HttpClient,public authS:AuthService,private toastr:ToastrService) { 

  }
  ngOnInit(): void {
  }

  formGroup =new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
    gender:new FormControl(''),
    phoneNumber1:new FormControl(''),
    dateOfBirth:new FormControl(''),
    country:new FormControl(''),
    city:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),
  })

  firstName1:string|undefined;
  lastName1:string|undefined;
  email1:string|undefined;
  gender1:string|undefined;
  phoneNumber2:any;
  dateOfBirth1:Date|undefined;
  country1:string|undefined;
  city1:string|undefined;
  password1:string|undefined;
  confirmPassword1:string|undefined;
  id=this.authS.getCurrentUser()


  saveItem(){
    this.firstName1=this.formGroup.value.firstName;
    this.lastName1=this.formGroup.value.lastName;
    this.email1=this.formGroup.value.email;
    this.gender1=this.formGroup.value.gender;
    this.phoneNumber2=this.formGroup.value.phoneNumber1;
    this.dateOfBirth1=this.formGroup.value.dateOfBirth
    this.password1=this.formGroup.value.password
    this.confirmPassword1=this.formGroup.value.confirmPassword
    this.country1=this.formGroup.value.country;
    this.city1=this.formGroup.value.city;


    const data2={
      firstName:this.firstName1,
      lastName:this.lastName1,
      email:this.email1,
      gender:this.gender1,
      phoneNumber1:parseInt(this.phoneNumber2),
      password:this.password1,
      confirmPassword:this.confirmPassword1,
      dateOfBirth:this.dateOfBirth1,
      country:this.country1,
      city:this.city1,
      roleID:4,
      userID:this.id
    }
    this.profileS.update(this.id,data2);

  }

}
