import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserreportService } from 'src/app/services/userreport.service';

@Component({
  selector: 'app-dietcategory',
  templateUrl: './dietcategory.component.html',
  styleUrls: ['./dietcategory.component.css']
})
export class DietcategoryComponent implements OnInit {

  constructor(private router:Router,public userReportS:UserreportService,private toastr:ToastrService,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.userReportS.GetAllUserReports()
  }

  getDietByUserEmail(e:any){
    this.userReportS.getDietByUserEmail(e.target.value);
  }

}
