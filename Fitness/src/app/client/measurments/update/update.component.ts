import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { MeasurementService } from 'src/app/services/measurement.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:any
  height:any;
  weight:any;
  bicepsWidth:any;
  thighWidth:any;
  chest:any;
  shoulder:any;
  waist:any;
  dateOfMeasurement:any
  constructor(public measS:MeasurementService,public authS:AuthService,private dialogRef: MatDialogRef<UpdateComponent>,@Inject(MAT_DIALOG_DATA) data:any) {  
      this.id = data.id;
      this.height=data.height;
      this.weight=data.weight;
      this.bicepsWidth=data.bicepsWidth;
      this.thighWidth=data.thighWidth;
      this.chest=data.chest;
      this.shoulder=data.shoulder;
      this.waist=data.waist;
      this.dateOfMeasurement=data.dateOfMeasurement
   }

  ngOnInit(): void {
    console.log(this.id)
  }

  formGroup =new FormGroup({
    height:new FormControl(''),
    weight:new FormControl(''),
    bicepsWidth:new FormControl(''),
    thighWidth:new FormControl(''),
    chest:new FormControl(''),
    shoulder:new FormControl(''),
    waist:new FormControl('')
  })

  height2:any;
  weight2:any;
  bicepsWidth2:any;
  thighWidth2:any
  chest2:any;
  shoulder2:any;
  waist2:any;
  userID:any;

  saveItem(){
    this.height2=this.formGroup.value.height;//c#
    this.weight2=this.formGroup.value.weight;
    this.bicepsWidth2=this.formGroup.value.bicepsWidth;
    this.thighWidth2=this.formGroup.value.thighWidth;
    this.chest2=this.formGroup.value.chest;
    this.shoulder2=this.formGroup.value.shoulder
    this.waist2=this.formGroup.value.waist;

    const data2={
      height:parseInt(this.height2),
      weight:parseInt(this.weight2),
      bmi:this.weight2/(this.height2/100*this.height2/100),
      bicepsWidth:parseInt(this.bicepsWidth2),
      thighWidth:parseInt(this.thighWidth2),
      chest:parseInt(this.chest2),
      waist:parseInt(this.waist2),
      shoulder:parseInt(this.shoulder2),
      userId:this.authS.getCurrentUser(),
      dateOfMeasurement:this.dateOfMeasurement

       

    }
    this.id=parseInt(this.id);
    this.measS.update(this.id,data2);



  }

}


