import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private router:Router,public userS:UsersService,private toastr:ToastrService,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.userS.GetAllEmployees()   
}

   

   

}
