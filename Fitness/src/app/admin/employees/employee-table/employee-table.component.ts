import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

export interface PeriodicElement {
  userId: number;
  username: string;
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

  constructor(private router:Router,public userS:UsersService,private toastr:ToastrService,private dialog:MatDialog) {}

  ngOnInit(): void {
  }

  @Input () userId:number|undefined;
  @Input () username:string|undefined;
  @Input () firstName:string|undefined;
  @Input () lastName:string|undefined;
  @Input () email:string|undefined;
  @Input () gender:string|undefined;
  @Input () phoneNumber1:number|undefined;
  @Input () dateOfBirth:Date|undefined;
  @Input () country:string|undefined;
  @Input () city:string|undefined;

  displayedColumns: string[] = ['username','firstName', 'lastName', 'email','gender','phoneNumber1','dateOfBirth','country','city','position','salary','delete'];
  clickedRows = new Set<PeriodicElement>();

}
