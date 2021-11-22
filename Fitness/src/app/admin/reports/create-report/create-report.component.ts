import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  constructor(public reportsS:ReportsService) { }

  ngOnInit(): void {
  }

  formGroup =new FormGroup({
    DietFile:new FormControl('',Validators.required),
    DietPeriod:new FormControl('',Validators.required),
    Actualprice:new FormControl('',Validators.required),
    CustomerPrice:new FormControl('',Validators.required),
    DietCategoryId:new FormControl('',Validators.required)
  })

  DietPeriod1:any;
  Actualprice1:any;
  CustomerPrice1:any;
  DietCategoryId1:any;

  saveItem(){
    debugger
    this.DietPeriod1=this.formGroup.value.DietPeriod;
    this.Actualprice1=this.formGroup.value.Actualprice;
    this.CustomerPrice1=this.formGroup.value.CustomerPrice;
    this.DietCategoryId1=this.formGroup.value.DietCategoryId;

    const data={
      DietPeriod:parseInt(this.DietPeriod1),
      Actualprice:parseInt(this.Actualprice1),
      CustomerPrice:parseInt(this.CustomerPrice1),
      DietCategoryId:parseInt(this.DietCategoryId1)      
    }

    this.reportsS.createReport(data)
  }

  uploadFile(files:any) {
    if (files.length === 0) {
    return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.reportsS.uploadAttachment(formData);
    }

}
