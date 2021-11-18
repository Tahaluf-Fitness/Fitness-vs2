import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private spiner:NgxSpinnerService,private router:Router,private http:HttpClient,private toastr:ToastrService) { }

  data:any =[{}]
  data2:any =[{}]


  create(data:any){
    this.spiner.show();
    this.http.post('https://localhost:44303/api/Review/',data).subscribe((res:any)=>{
      this.toastr.success('Review saved successfuly');
      this.spiner.hide();
  
    },err=>{
     this.spiner.hide();
     this.toastr.error('Review not saved');
  
    })
  }

  getUnCheckReview(){
    this.http.get('https://localhost:44303/api/Review').subscribe((res=>{
      this.data=res;
    }))
  }

  GetCheckedReview(){
    this.http.get('https://localhost:44303/api/Review/GetCheckedReview').subscribe((res=>{
      this.data2=res;
    }))
  }

  DeletebyID(id:number){
    this.spiner.show();
    this.http.delete('https://localhost:44303/api/Review/delete/'+id)
    .subscribe((date:any)=>{
      this.spiner.hide();
      this.toastr.success('Deleted');
    
    },err=>{
      this.spiner.hide();  
    })
  }

  updateStatus(id:number,data:any){
    this.spiner.show();
  
    let url='https://localhost:44303/api/Review/update/'+id
  
    this.http.put(url,data).subscribe((res:any)=>{
      this.toastr.success('Status updated succsessfuly');
      this.spiner.hide();
  
    },err=>{
     this.spiner.hide();
     this.toastr.error('Not Updated');
  
    })
  }

}
