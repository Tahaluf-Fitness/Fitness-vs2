import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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

  constructor(private router:Router,public authS:AuthService,public productS:ProductService,private dialog:MatDialog,private toastr:ToastrService,private spinner:NgxSpinnerService) { }
  size=0
  ngOnInit(){
    this.productS.counter.subscribe((value:any)=>{
      this.size=value
    })
  }

  //  userID=this.authS.getCurrentUser()
  
   checkMeasurement=localStorage.getItem('measurementData')
   checkPayment=localStorage.getItem('paymentData')
  addMeasurment(){
    if(this.authS.isLoggedIn() && this.checkMeasurement == null){
      this.dialog.open(ProductMeasComponent)
    } 
    if(!this.authS.isLoggedIn()){
      this.toastr.show('Please Login First')
    }

    if(this.checkMeasurement != null){
      this.toastr.show('You added your measurments')

    }  
  }

  addPayment(){
    if(this.authS.isLoggedIn() && localStorage.getItem("measurementData") != null && localStorage.getItem("paymentData") == null){
      this.dialog.open(PaymentComponent)
    } 
    if(!this.authS.isLoggedIn()){
      this.toastr.show('Please login First')
    }
    if(localStorage.getItem("measurementData") == null && this.authS.isLoggedIn()){
      this.toastr.show('Please enter your measurements First')
    }

    if(localStorage.getItem("paymentData") != null){
      this.toastr.show('You payed successfully,your file is ready to download')
    }
  }

  generateDiet(){
      const obj=localStorage.getItem('measurementData')
      let bmi=0
      if(obj!=null){
        const obj2=JSON.parse(obj)
        bmi=obj2.bmi
      }

    if(this.authS.isLoggedIn() && this.checkMeasurement != null && this.checkPayment != null){
      console.log(bmi)
      if(bmi<=18.5){
        const path = "../../../assets/doc/Underweight.pdf";
        window.open(path);
      }
      if(bmi>=18.5 && bmi<=25){
        const path = "../../../assets/doc/Optimal.pdf";
        window.open(path);
      }
      if(bmi>=25 && bmi<=30){
        const path = "../../../assets/doc/Overweight.pdf";
        window.open(path);
      }
      if( bmi>30){
        const path = "../../../assets/doc/Obese.pdf";
        window.open(path);
      }
      
    }
    if(this.checkMeasurement == null && this.authS.isLoggedIn()){
      this.toastr.show('Please enter your measurements first')
    }

    if(this.checkPayment == null && this.checkMeasurement!=null){
      this.toastr.show('Please pay first')
    }

    if(!this.authS.isLoggedIn()){
      this.toastr.show('Please login First')

    }
  }
  
  // <a download="schedule-bg" target="_blank" href="../../../assets/images/schedule-bg.jpg" style="cursor: pointer;"> 
  //           Download
  //         </a>

  goToSignUp(){
      this.router.navigate(['security/signup']);     
  }

  reset(){
    if(this.checkMeasurement!=null && this.checkPayment==null){
      localStorage.removeItem("measurementData");
      window.location.reload()

    }
    if(this.checkPayment!=null){
      this.toastr.show('You payed successfuly,download your file')
    }
    if(this.checkMeasurement==null){
      this.toastr.show('You did not add measurments')
    }

  }

  reGenerateDiet(){
    if(this.checkPayment !=null && this.checkMeasurement != null){
      localStorage.removeItem("measurementData");
      localStorage.removeItem("paymentData");
      this.toastr.show('You can start again')
      window.location.reload()
    } 

    if(this.checkMeasurement!=null && this.checkPayment==null){
      this.toastr.show('Please Enter Reset Measurments')
    }

    if(this.checkMeasurement==null && this.checkPayment==null){
     this.toastr.show('You did not add measurments')
    }

  }
  

}
