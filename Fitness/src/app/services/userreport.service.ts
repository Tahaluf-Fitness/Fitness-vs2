import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserreportService {

  data :any =[{}]
  data2 :any =[{}]


  constructor(private spiner:NgxSpinnerService,private router:Router,private http:HttpClient,public authS:AuthService,private toastr:ToastrService,private dialog:MatDialog) { }

  id:number=this.authS.getCurrentUser()

  GetReportsByUserID(){
    this.http.get('https://localhost:44303/api/UserReports/my-reports/'+this.id).subscribe((res=>{
      this.data=res;
      this.toastr.success('Data retrieved Successfully');
   
    }))
    console.log(this.data)
    debugger
   }

   GetAllReports(){
    this.http.get('https://localhost:44303/api/UserReports').subscribe((res=>{
      this.data2=res;
      this.toastr.success('Data retrieved Successfully');
   
    }))
    console.log(this.data)
   }

}
