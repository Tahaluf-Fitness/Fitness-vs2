import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserreportService } from 'src/app/services/userreport.service';

export interface PeriodicElement {
  userID: number;
  dietReportId: number;
  reportDate: string;
  dietFile: string;
  DietPeriod: number;
  customerPrice: number;
  categoryName: string;
}

@Component({
  selector: 'app-diet-table',
  templateUrl: './diet-table.component.html',
  styleUrls: ['./diet-table.component.css']
})

export class DietTableComponent implements OnInit {

  @Input () userID:number|undefined;
  @Input () dietReportId:number|undefined;
  @Input () reportDate:string|undefined;
  @Input () dietFile:string|undefined;
  @Input () dietPeriod:number | undefined;
  @Input () customerPrice:number|undefined;
  @Input () categoryName:string|undefined;
 
  constructor(private router:Router,public reportS:UserreportService,private toastr:ToastrService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['Date', 'File', 'Period','Price','Category'];
  clickedRows = new Set<PeriodicElement>();
  dataSource = this.reportS.data;



}
