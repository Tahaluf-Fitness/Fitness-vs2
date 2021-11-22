import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MeasurementService } from 'src/app/services/measurement.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { BehaviorSubject } from 'rxjs';


export interface PeriodicElement {
  mesurmentId: number;
  height: number;
  weight: number;
  bmi: number;
  bicepsWidth: number;
  thighWidth: number;
  chest: number;
  shoulder: number;
  dateOfMeasurement: string;
}

@Component({
  selector: 'app-meas-table',
  templateUrl: './meas-table.component.html',
  styleUrls: ['./meas-table.component.css']
})



export class MeasTableComponent implements OnInit {
  
  @Input () height:number|undefined;
  @Input () weight:number|undefined;
  @Input () bmi:number|undefined;
  @Input () bicepsWidth:number|undefined;
  @Input () thighWidth:number|undefined;
  @Input () chest:number|undefined;
  @Input () shoulder:number|undefined;
  @Input () waist:number|undefined;
  @Input () dateOfMeasurement:string|undefined;
  @Input () userId:number|undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  
  constructor(private router:Router,public measS:MeasurementService,private toastr:ToastrService,private dialog:MatDialog) {}

  ngOnInit(): void {
  }
 
  displayedColumns: string[] = ['height', 'weight', 'bmi', 'bicepsWidth','thighWidth','chest','shoulder','waist','date','delete','update'];
  clickedRows = new Set<PeriodicElement>();

  Update(id:number,height:string,weight:string,bicepsWidth:string,thighWidth:string,chest:string,shoulder:string,waist:string,dateOfMeasurement:Date){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data={
      id:id,
      height:height,
      weight:weight,
      bicepsWidth:bicepsWidth,
      thighWidth:thighWidth,
      chest:chest,
      shoulder:shoulder,
      waist:waist,
      dateOfMeasurement:dateOfMeasurement
    }
    this.dialog.open(UpdateComponent,dialogConfig)
    console.log(id)

  }

  

}

  
