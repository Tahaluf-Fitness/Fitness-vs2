import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReportsService } from 'src/app/services/reports.service';
import { CreateReportComponent } from './create-report/create-report.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(public reportS:ReportsService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.reportS.GetAllDietReport()
  }

  AddFile(){
  this.dialog.open(CreateReportComponent)
  }

}
