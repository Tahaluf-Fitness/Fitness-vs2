import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  

data :any =[{}]
selectedMeasure:any=[{}];


constructor(private spiner:NgxSpinnerService,private router:Router,private http:HttpClient,public authS:AuthService,private toastr:ToastrService,private dialog:MatDialog) { }

userID:number=this.authS.getCurrentUser()



GetMeasurementByUserID(){
 this.http.get('https://localhost:44303/api/Measurement/my-measurements/'+this.userID).subscribe((res=>{
   this.data=res;
   this.toastr.success('Data retrieved Successfully');

 }))
}



DeletebyID(id:number){
this.spiner.show();
this.http.delete('https://localhost:44303/api/Measurement/delete/'+id)
.subscribe((data:any)=>{
  this.spiner.hide();
  this.toastr.success('Deleted');

},err=>{
  this.spiner.hide();
  this.toastr.warning('This item cannot be deleted')
  window.location.reload();
})
window.location.reload();


}

update(id:number,data:any){
  this.spiner.show();

  let url='https://localhost:44303/api/Measurement/update/'+id

  this.http.put(url,data).subscribe((res:any)=>{
    this.selectedMeasure=res;
    this.toastr.success('data updated succsessfuly');
    console.log(this.selectedMeasure)
    this.spiner.hide();

  },err=>{
   this.spiner.hide();
   this.toastr.error('Not Updated');

  })

}

create(data:any){
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


