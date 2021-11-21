import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { PaymentComponent } from './payment/payment.component';
import { ProductMeasComponent } from './product-meas/product-meas.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router:Router,public authS:AuthService,public productS:ProductService,private dialog:MatDialog,private toastr:ToastrService) { }
  size=0
  ngOnInit(){
    this.productS.counter.subscribe((value:any)=>{
      this.size=value
    })
  }

  
  addMeasurment(){
    if(this.authS.isLoggedIn() && localStorage.getItem("measurementData") == null){
      this.dialog.open(ProductMeasComponent)
    } 
    if(!this.authS.isLoggedIn()){
      this.toastr.show('Please Login First')
    }

    if(localStorage.getItem("measurementData") != null){
      this.toastr.show('You added your measurments')

    }  
  }

  addPayment(){
    if(this.authS.isLoggedIn() && localStorage.getItem("measurementData") != null){
      this.dialog.open(PaymentComponent)
    } 
    if(!this.authS.isLoggedIn()){
      this.toastr.show('Please login First')
    }
    if(localStorage.getItem("measurementData") == null){
      this.toastr.show('Please enter your measurements First')
    }
  }

  reset(){
    localStorage.removeItem("measurementData");

  }

}
