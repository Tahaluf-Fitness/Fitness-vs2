import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserreportService } from 'src/app/services/userreport.service';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.css']
})
export class DietsComponent implements OnInit {

  constructor(public reportS:UserreportService,public tostr:ToastrService,
    private spiner:NgxSpinnerService,public router:Router) { }

  ngOnInit(): void {
    this.getData()

  }

  getData(){
    this.reportS.GetReportsByUserID()   
    debugger
}

}
