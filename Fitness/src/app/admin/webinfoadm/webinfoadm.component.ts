import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-webinfoadm',
  templateUrl: './webinfoadm.component.html',
  styleUrls: ['./webinfoadm.component.css']
})
export class WebinfoadmComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,public infoS:InfoService,private toastr:ToastrService) {} 

  ngOnInit(): void {
    this.infoS.GetInfo()
  }

 


  
}
