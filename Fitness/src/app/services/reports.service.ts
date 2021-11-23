import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  display_file: any;
  selectDiet:any=[{}]


  constructor(private spiner:NgxSpinnerService,private router:Router,private http:HttpClient,public authS:AuthService,private toastr:ToastrService,private dialog:MatDialog) { }

  GetAllDietReport(){
    this.http.get('https://localhost:44303/api/DietReport').subscribe((res=>{
      this.data=res;
      this.toastr.success('Data retrieved Successfully');
   
    }))
   }

   createReport(data:any){
    data={...data,dietFile:this.display_file};

    this.spiner.show();
    this.http.post('https://localhost:44303/api/DietReport',data).subscribe((res:any)=>{
      this.toastr.success('Created');
      this.spiner.hide();
  
    },err=>{
     this.spiner.hide();
     this.toastr.error('Not Created');
  
    })
  }

   uploadAttachment(file:FormData){
    const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict),
    };
    this.http.post('https://localhost:44303/api/DietReport/upload',file).subscribe((data: any) => {
     this.display_file=data.dietFile;
    if(data){
    console.log(data);}
    }, err => {
    
    })
    }

    DeletebyID(id:number){
      this.spiner.show();
      this.http.delete('https://localhost:44303/api/DietReport/delete/'+id)
      .subscribe((data:any)=>{
        this.spiner.hide();
        this.toastr.success('Deleted');
      
      },err=>{
        this.spiner.hide();  
      })
    }

    getDietByCategory(name:string){
      this.spiner.show();
      this.http.get('https://localhost:44303/api/DietReport/search/'+name).subscribe((data:any)=>{       
        this.selectDiet=data;
        console.log(this.selectDiet);
        this.data=this.selectDiet;
        this.router.navigate(['admin/all-reports']);

        debugger
        this.spiner.hide();
  
      },err=>{
        this.spiner.hide();
        this.toastr.error(err.status);
      })
      debugger

    }

  }

