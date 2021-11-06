import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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

}
