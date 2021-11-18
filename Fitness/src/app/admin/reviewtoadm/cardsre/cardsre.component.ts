import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-cardsre',
  templateUrl: './cardsre.component.html',
  styleUrls: ['./cardsre.component.css']
})
export class CardsreComponent implements OnInit {

  constructor( private http:HttpClient,private spiner :NgxSpinnerService,public reviewS:ReviewService, private toastr:ToastrService,private router:Router) { }

  @Input () reviewId:number|undefined;
  @Input () reviewValue:number | undefined;
  @Input () name:string| undefined;
  @Input () status:any;
  @Input () comment:string|undefined;
  ngOnInit(): void {
  }

  Delete(){
    if(this.reviewId){
      this.reviewS.DeletebyID(this.reviewId);
      window.location.reload();

    }
    else {
      this.toastr.warning('This item cannot be deleted')
      window.location.reload();

    }
  }

  Read(){
    
    const data={
      status:true
    }
    if(this.reviewId){
      this.reviewS.updateStatus(this.reviewId,data);
    }
    window.location.reload();
  }

}
