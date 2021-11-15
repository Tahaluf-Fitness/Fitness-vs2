import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MeasurementService } from 'src/app/services/measurement.service';
import { UserreportService } from 'src/app/services/userreport.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public authS:AuthService,public measS:MeasurementService) { }

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


    const data2={
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
    this.measS.create(data2);
    window.location.reload();

  }


}
