import { Component, Input, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';

export interface PeriodicElement {
  reportDate: Date;
  dietFile: string;
  dietPeriod: number;
  actualprice: number;
  customerPrice: number;
  categoryName: string;
}

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {

  constructor(public reportsS:ReportsService) { }

  @Input () reportDate:Date|undefined;
  @Input () dietFile:string|undefined;
  @Input () dietPeriod:number|undefined;
  @Input () actualprice:number|undefined;
  @Input () customerPrice:string|undefined;
  @Input () categoryName:string|undefined;
  ngOnInit(): void {
  }

  displayedColumns: string[] = ['reportDate', 'dietFile', 'dietPeriod','actualprice','customerPrice','categoryName'];
  clickedRows = new Set<PeriodicElement>();

}
