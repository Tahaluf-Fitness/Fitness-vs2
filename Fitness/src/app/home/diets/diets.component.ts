import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.css']
})
export class DietsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToGenerate(){
    this.router.navigate(['diet'])

  }

}
