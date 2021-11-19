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
export class ReportsService {

  data :any =[{}]

  constructor(private spiner:NgxSpinnerService,private router:Router,private http:HttpClient,public authS:AuthService,private toastr:ToastrService,private dialog:MatDialog) { }

  GetAllDietReport(){
    this.http.get('https://localhost:44303/api/UserReports/GetAllDietReport').subscribe((res=>{
      this.data=res;
      this.toastr.success('Data retrieved Successfully');
   
    }))
   }
}
