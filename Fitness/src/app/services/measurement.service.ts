import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

data :any =[{}]

constructor(private spinner:NgxSpinnerService,private router:Router,private http:HttpClient,public authS:AuthService) { }
 
 


// id:number=this.authS.getCurrentUser()

GetMeasurementByUserID(){
 this.http.get('https://localhost:44303/api/Measurement/my-measurements/'+1).subscribe((res=>{
   this.data=res;
 }))
}

}


