import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 
  data:any =[{}]
  
  constructor(private spiner:NgxSpinnerService,private router:Router,private http:HttpClient,public authS:AuthService,private toastr:ToastrService) { }

userID:number=this.authS.getCurrentUser()
GetUserInfoByID(){
 this.http.get('https://localhost:44303/api/user/profile/'+this.userID).subscribe((res=>{
   this.data=res;
   this.toastr.success('Data retrieved Successfully');
 }))

}

update(id:number,data:any){
  this.spiner.show();
  let url='https://localhost:44303/api/user/update/'+id
  this.http.put(url,data).subscribe((res:any)=>{
    this.toastr.success('Info updated succsessfuly');
    this.spiner.hide();

  },err=>{
   this.spiner.hide();
   this.toastr.error('Not Updated');
   debugger

  })

}

}
