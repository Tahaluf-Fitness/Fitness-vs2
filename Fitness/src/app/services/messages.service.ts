import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor( private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router) { }
  data :any =[{}]

  GetAll(){
    this.http.get('https://localhost:44303/api/contactus').subscribe((res=>{
      this.data=res;
      this.toastr.success('Messages retrieved Successfully');
    }))

}

DeletebyID(id:number){
  this.spiner.show();
  this.http.delete('https://localhost:44303/api/contactus/delete/'+id)
  .subscribe((date:any)=>{
    this.spiner.hide();
    this.toastr.success('Deleted');
  
  },err=>{
    this.spiner.hide();  
  })
}

}
