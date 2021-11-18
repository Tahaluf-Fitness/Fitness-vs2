import { HttpClient } from '@angular/common/http';
import { Binary, BindingType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private router:Router,public reviewS:ReviewService,private http:HttpClient,public authS:AuthService,private toastr:ToastrService) { }

  @Input () reviewValue:number|undefined;
  @Input () name:string|undefined;
  @Input () comment:string|undefined;

  ngOnInit(): void {
  }

  formGroup =new FormGroup({
    reviewValue:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    comment:new FormControl('',Validators.required)
  })

  
  reviewValue1:any;
  name1:string|undefined;
  comment1:string|undefined;
  status1=false

  saveReview(){
    this.reviewValue1=this.formGroup.value.reviewValue;
    this.name1=this.formGroup.value.name;
    this.comment1=this.formGroup.value.comment;
    const data2={
      reviewValue:parseInt(this.reviewValue1),
      name:this.name1,
      comment:this.comment1,
      status:false
    }
    this.reviewS.create(data2);
    debugger
  }

}
