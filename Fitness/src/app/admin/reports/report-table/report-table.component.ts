import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReportsService } from 'src/app/services/reports.service';

export interface PeriodicElement {
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

  constructor(public reportsS:ReportsService,private toastr:ToastrService) { }
  @Input () DietReportId:number|undefined
  @Input () dietFile:string|undefined;
  @Input () dietPeriod:number|undefined;
  @Input () actualprice:number|undefined;
  @Input () customerPrice:string|undefined;
  @Input () categoryName:string|undefined;
  ngOnInit(): void {
  }

  displayedColumns: string[] = ['dietFile', 'dietPeriod','actualprice','customerPrice','categoryName','delete'];
  clickedRows = new Set<PeriodicElement>();

  Delete(){
    if(this.DietReportId){
      this.reportsS.DeletebyID(this.DietReportId);
      window.location.reload();

    }
    else {
      this.toastr.warning('This item cannot be deleted')
      window.location.reload();

    }
  }

}
