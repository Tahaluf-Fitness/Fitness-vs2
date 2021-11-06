import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(private router:Router,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  goToProfile(){
    this.spinner.show()
    setTimeout(()=>{
      this.router.navigate(['accountant'])
      this.spinner.hide();
 },700); 
  }

  goToUsers(){
    this.spinner.show()
    setTimeout(()=>{
      this.router.navigate(['accountant/users'])
      this.spinner.hide();
 },700); 
  }
  goToEmployees(){
    this.spinner.show()
    setTimeout(()=>{
      this.router.navigate(['accountant/employees'])
      this.spinner.hide();
 },700); 
  }
  goToReports(){
       this.spinner.show()
       setTimeout(()=>{
        this.router.navigate(['accountant/reports'])
        this.spinner.hide();
    },700); 
  }

}
