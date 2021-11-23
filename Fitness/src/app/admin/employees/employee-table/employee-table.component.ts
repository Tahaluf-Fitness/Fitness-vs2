import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';
import { CreateComponent } from '../create/create.component';
import { jsPDF } from "jspdf";


export interface PeriodicElement {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phoneNumber1: number;
  dateOfBirth: Date;
  country: string;
  city: string;
  position: string;
  salary: number;
}

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  @ViewChild('resumeBody',{static: false}) element!: ElementRef;

  constructor(private router:Router,public userS:UsersService,private toastr:ToastrService,private dialog:MatDialog) {}

  ngOnInit(): void {
  }

  @Input () userId:number|undefined;
  @Input () firstName:string|undefined;
  @Input () lastName:string|undefined;
  @Input () email:string|undefined;
  @Input () gender:string|undefined;
  @Input () phoneNumber1:number|undefined;
  @Input () dateOfBirth:Date|undefined;
  @Input () country:string|undefined;
  @Input () city:string|undefined;

  displayedColumns: string[] = ['firstName', 'lastName', 'email','gender','phoneNumber1','dateOfBirth','country','city','position','salary','delete'];
  clickedRows = new Set<PeriodicElement>();


  addEmployee(){
    this.dialog.open(CreateComponent)

  }

  generateResume(){
    let generatedResumePDF = new jsPDF('p','pt','a3');
    generatedResumePDF.html(this.element.nativeElement, {
      callback: (pdfFile)=> pdfFile.save('test.pdf')
    });
  }

}
