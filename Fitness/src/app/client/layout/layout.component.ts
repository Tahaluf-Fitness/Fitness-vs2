import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor( private router:Router,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  goToProfile(){
    this.spinner.show()

    setTimeout(()=>{
      this.spinner.hide();
      this.router.navigate(['client'])
 },300); 

  }

  goToMeasurments(){
    this.spinner.show()

    setTimeout(()=>{
      this.router.navigate(['client/measurments'])
      this.spinner.hide();
 },300); 


  }

  goToDiets(){

      this.router.navigate(['client/diet'])
 

  }

  goToCompetitions(){
    this.router.navigate(['client/competitions'])
  }

  logout(){
    localStorage.clear();
    this.spinner.show()

    setTimeout(()=>{
      this.router.navigate(['']);
      this.spinner.hide();
 },300); 

  }
}
