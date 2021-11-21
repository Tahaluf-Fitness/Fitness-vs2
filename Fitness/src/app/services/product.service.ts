import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private spiner:NgxSpinnerService,private router:Router,private http:HttpClient,public authS:AuthService,private toastr:ToastrService) { }

  measurementData:any={}
  paymentData:any={}
  
  
  counter=new BehaviorSubject(0);


  ngOnInit() {
  }

  createMeasurement(data:any){
    this.spiner.show();
    this.http.post('https://localhost:44303/api/measurement/',data).subscribe((res:any)=>{
      this.toastr.success('Created');
      this.spiner.hide();
  
    },err=>{
     this.spiner.hide();
     this.toastr.error('Not Created');
  
    })
  
  }

  

 
}
