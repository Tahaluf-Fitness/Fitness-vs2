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
      this.router.navigate(['client'])
      this.spinner.hide();
 },500); 

  }

  goToMeasurments(){
    this.spinner.show()

    setTimeout(()=>{
      this.router.navigate(['client/measurments'])
      this.spinner.hide();
 },500); 


  }

  goToDiets(){
    this.spinner.show()

    setTimeout(()=>{
      this.router.navigate(['client/diet'])
      this.spinner.hide();
 },500); 

  }

  goToCompetitions(){
    this.spinner.show()

    setTimeout(()=>{
      this.router.navigate(['client/competitions'])
      this.spinner.hide();
 },500); 

  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
