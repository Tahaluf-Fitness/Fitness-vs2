import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor(private router:Router,public userS:UsersService,private toastr:ToastrService,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.userS.GetAllClients()   
}

searchUserByFirstname(e:any){
  this.userS.searchUserByFirstname(e.target.value);
}

  

}
