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
export class UsersService {

  data :any =[{}]
  data2 :any =[{}]


  constructor(private spiner:NgxSpinnerService,private router:Router,private http:HttpClient,public authS:AuthService,private toastr:ToastrService,private dialog:MatDialog) { }

  GetAllClients(){
    this.http.get('https://localhost:44303/api/user/GetAllClients').subscribe((res=>{
      this.data=res;
      this.toastr.success('Data retrieved Successfully');
   
    }))
   }

   DeleteClientbyID(id:number){
    this.spiner.show();
    console.log(id)
    this.http.delete('https://localhost:44303/api/user/delete/'+id)
    .subscribe((data:any)=>{
      this.spiner.hide();
      this.toastr.success('Deleted');
      window.location.reload();

    
    },err=>{
      this.spiner.hide();
      this.toastr.warning('This item cannot be deleted')
    })
    }

    GetAllEmployees(){
      this.http.get('https://localhost:44303/api/user/GetAllEmployees').subscribe((res=>{
        this.data2=res;
        this.toastr.success('Data retrieved Successfully');
     
      }))
     }

     addEmployee(data:any){
      this.spiner.show();
      this.http.post('https://localhost:44303/api/user/',data).subscribe((res:any)=>{
        this.toastr.success('Created');
        this.spiner.hide();
        window.location.reload();

    
      },err=>{
       this.spiner.hide();
       this.toastr.error('Not Created');
    
      })

    
}
}
