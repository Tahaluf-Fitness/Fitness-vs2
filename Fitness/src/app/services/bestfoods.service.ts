import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BestfoodsService {
  data: any = [{}]
  selectedFood:any=[{}];
  numberOfActiveFood=new BehaviorSubject(0);
  numberofActiveFood1:number=0;
  constructor(private http: HttpClient, private spiner: NgxSpinnerService, private toastr: ToastrService,
    private router: Router) { }

  getAllBestFood() {
    return this.http.get('https://localhost:44303/api/bestfood/')
  }

  DeletebyID(id:number){
    this.spiner.show();
    this.http.delete('https://localhost:44303/api/bestfood/delete/'+id)
    .subscribe((data:any)=>{
      this.spiner.hide();
      this.toastr.success('Deleted');
    
    },err=>{
      this.spiner.hide();
      this.toastr.warning('This item cannot deleted')
      window.location.reload();
    })
    window.location.reload();
    
    
    }

  create(data:any){
    this.spiner.show();
    debugger
    this.http.post('https://localhost:44303/api/bestfood/',data).subscribe((res:any)=>{
      this.toastr.success('Created');
      this.spiner.hide();
 
    },err=>{
     this.spiner.hide();
     this.toastr.error(' Not Created');
  
    })
 
  }

  update(id:number,data:any){
    this.spiner.show();
  
    let url='https://localhost:44303/api/bestfood/update/'+id
  
    this.http.put(url,data).subscribe((res:any)=>{
      this.selectedFood=res;
      this.toastr.success('data updated succsessfuly');
      console.log(this.selectedFood)
      this.spiner.hide();
  
    },err=>{
     this.spiner.hide();
     this.toastr.error('Not Updated');
  
    })
  
  }
}
