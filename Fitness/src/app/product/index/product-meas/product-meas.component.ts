import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-meas',
  templateUrl: './product-meas.component.html',
  styleUrls: ['./product-meas.component.css']
})
export class ProductMeasComponent implements OnInit {

  constructor(public authS:AuthService,public productS:ProductService) { }

  ngOnInit(): void {
    
  }



  formGroup =new FormGroup({
    height:new FormControl(''),
    weight:new FormControl('',Validators.required),
    bicepsWidth:new FormControl('',Validators.required),
    chest:new FormControl('',Validators.required),
    thighWidth:new FormControl('',Validators.required),
    shoulder:new FormControl('',Validators.required),
    waist:new FormControl('',Validators.required)
  })

  height2:any;
  weight2:any;
  bicepsWidth2:any;
  chest2:any;
  thighWidth2:any
  shoulder2:any
  waist2:any
  date=new Date() 
  id=this.authS.getCurrentUser()
  bmi:any;

  saveItem(){
    this.height2=this.formGroup.value.height;//c#
    this.weight2=this.formGroup.value.weight;
    this.bicepsWidth2=this.formGroup.value.bicepsWidth;
    this.chest2=this.formGroup.value.chest;
    this.thighWidth2=this.formGroup.value.thighWidth;
    this.shoulder2=this.formGroup.value.shoulder;
    this.waist2=this.formGroup.value.waist;


    this.productS.measurementData={
      height:parseInt(this.height2),
      weight:parseInt(this.weight2),
      bmi:this.weight2/(this.height2/100*this.height2/100),
      bicepsWidth:parseInt(this.bicepsWidth2),
      chest:parseInt(this.chest2),
      thighWidth:parseInt(this.thighWidth2),
      shoulder:parseInt(this.shoulder2),
      waist:parseInt(this.waist2),
      dateOfMeasurement:this.date,
      userId:this.id
    }
    this.productS.createMeasurement(this.productS.measurementData);
    localStorage.setItem('measurementData',JSON.stringify(this.productS.measurementData))
    this.productS.counter.next(1)

  }
  

  

}
