import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(public reportS:ReportsService) { }

  ngOnInit(): void {
    this.reportS.GetAllDietReport()
  }

}
