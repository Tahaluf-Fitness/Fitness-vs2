import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // data:any =[{}]

  // @Input () firstName:string|undefined;
  // @Input () lastName:string|undefined;
  // @Input () username:number|undefined;
  // @Input () email:string|undefined;
  // @Input () phoneNumber1:number|undefined;
  // @Input () dateOfBirth:Date|undefined;
  // @Input () country:string|undefined;
  // @Input () city:string|undefined;

  constructor(private router:Router,public profileS:ProfileService,private http:HttpClient,public authS:AuthService,private toastr:ToastrService) { 

  }

  ngOnInit(): void {
  this.getData()
  }


  

// formGroup =new FormGroup({
//   username:new FormControl(''),
//   firstName:new FormControl(''),
//   lastName:new FormControl(''),
//   email:new FormControl(''),
//   phoneNumber1:new FormControl(''),
//   dateOfBirth:new FormControl(''),
//   country:new FormControl(''),
//   city:new FormControl('')

// })

// userID:number=this.authS.getCurrentUser()
// GetUserInfoByID(){
//  this.http.get('https://localhost:44303/api/user/profile/'+this.userID).subscribe((res=>{
//    this.data=res;
//    console.log(this.data)

//    this.toastr.success('Data retrieved Successfully');

//  }))

// }

getData(){
  this.profileS.GetUserInfoByID()
}



}
