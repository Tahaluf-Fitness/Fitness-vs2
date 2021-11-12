import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MeasurementService } from 'src/app/services/measurement.service';

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
  
  @Input () mesurmentId:number|undefined;
  @Input () height:number|undefined;
  @Input () weight:number|undefined;
  @Input () bmi:number|undefined;
  @Input () bicepsWidth:number|undefined;
  @Input () thighWidth:number|undefined;
  @Input () chest:number|undefined;
  @Input () shoulder:number|undefined;
  @Input () waist:number|undefined;
  @Input () dateOfMeasurement:string='N/A';
  @Input () userId:number|undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  // dataSource = this.measS.data;

  
  constructor(private router:Router,public measS:MeasurementService,private toastr:ToastrService) {}

  ngOnInit(): void {

    
  }
 
  displayedColumns: string[] = ['height', 'weight', 'bmi', 'bicepsWidth','thighWidth','chest','shoulder','waist','date'];
  clickedRows = new Set<PeriodicElement>();

  dataSource = this.measS.data;
  

}

  

