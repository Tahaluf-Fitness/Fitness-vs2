import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MeasurementService } from 'src/app/services/measurement.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from './create/create.component';




@Component({
  selector: 'app-measurments',
  templateUrl: './measurments.component.html',
  styleUrls: ['./measurments.component.css']
})
export class MeasurmentsComponent implements OnInit {
  constructor(public measS: MeasurementService,public tostr:ToastrService,
    private spiner:NgxSpinnerService,public router:Router,public dialog:MatDialog) { }

  complaintsTable=this.measS.data;

  ngOnInit(): void {
    this.getData()
  }


  

  getData(){
    this.measS.GetMeasurementByUserID()   
}

addMeasurment(){
  this.dialog.open(CreateComponent)

}


}


