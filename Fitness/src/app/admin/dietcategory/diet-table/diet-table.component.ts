import { Component, Input, OnInit } from '@angular/core';
import { UserreportService } from 'src/app/services/userreport.service';

export interface PeriodicElement {
  userReportID: number;
  email:string
  reportDate: Date;
  dietFile: string;
  dietPeriod: number;
  actualprice: number;
  customerPrice: number;
  categoryName: string;
}

@Component({
  selector: 'app-diet-table',
  templateUrl: './diet-table.component.html',
  styleUrls: ['./diet-table.component.css']
})
export class DietTableComponent implements OnInit {

  constructor(public userReportS:UserreportService) { }

  @Input () userReportID:number|undefined;
  @Input () email:string|undefined;
  @Input () reportDate:Date|undefined;
  @Input () dietFile:string|undefined;
  @Input () dietPeriod:number|undefined;
  @Input () actualprice:number|undefined;
  @Input () customerPrice:string|undefined;
  @Input () categoryName:string|undefined;
  

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['email','reportDate', 'dietFile', 'dietPeriod','actualprice','customerPrice','categoryName'];
  clickedRows = new Set<PeriodicElement>();

}
