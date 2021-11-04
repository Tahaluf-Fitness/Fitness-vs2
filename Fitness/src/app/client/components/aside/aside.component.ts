import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToProfile(){
  this.router.navigate(['client'])
  }

  goToMeasurments(){
    this.router.navigate(['client/measurments'])

  }

  goToDiets(){
    this.router.navigate(['client/diet'])

  }

  goToCompetitions(){
    this.router.navigate(['client/competitions'])

  }

}
