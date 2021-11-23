import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admnavbar',
  templateUrl: './admnavbar.component.html',
  styleUrls: ['./admnavbar.component.css']
})
export class AdmnavbarComponent implements OnInit {

  constructor( private router:Router,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.spinner.show()

    setTimeout(()=>{
      this.router.navigate(['']);
      this.spinner.hide();
 },300); 

  }

  goToHome(){
    this.router.navigate([''])

  }

  goToDiet(){
    this.router.navigate(['diet'])
  }

}
