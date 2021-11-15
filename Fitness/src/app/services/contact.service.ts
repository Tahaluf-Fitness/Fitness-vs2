import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router) { }

  create(data:any){
    this.spiner.show();
   debugger
   this.http.post('https://localhost:44303/api/contactus/',data).subscribe((res:any)=>{
     this.toastr.success('Message sent Successfully');
     this.spiner.hide();

   },err=>{
    this.spiner.hide();
    this.toastr.error('Not Created');
 
   })

  }
}
