import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public productS:ProductService,private toastr:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  formGroup =new FormGroup({
    cardNum:new FormControl('',[Validators.required,Validators.minLength(8)]),
    cardDate:new FormControl('',Validators.required),
    cardPassword:new FormControl('',[Validators.required,Validators.minLength(6)])
  
  })

  cardNum1:any;
  cardDate1:Date | undefined;
  cardPassword1:any;

  saveItem(){
    this.cardNum1=this.formGroup.value.cardNum;
    this.cardDate1=this.formGroup.value.cardDate;
    this.cardPassword1=this.formGroup.value.cardPassword;

    this.productS.paymentData={
      cardNum:parseInt(this.cardNum1),
      cardDate:this.cardDate1,
      cardPassword:parseInt(this.cardPassword1)     
    }
    localStorage.setItem('paymentData',JSON.stringify(this.productS.paymentData))
    this.toastr.show('You payed successfully,your file is ready to download')
    

    
  }

}
