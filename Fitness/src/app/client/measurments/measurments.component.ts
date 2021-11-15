import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MeasurementService } from 'src/app/services/measurement.service';
import { JwtHelperService } from '@auth0/angular-jwt';
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  complaintsTable=this.measS.data;

  ngOnInit(): void {
    this.getData()
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.complaintsTable.paginator = this.paginator;
  }

  getData(){
    this.measS.GetMeasurementByUserID()   
}

addMeasurment(){
  this.dialog.open(CreateComponent)

}


}


