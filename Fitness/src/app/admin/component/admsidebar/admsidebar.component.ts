import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admsidebar',
  templateUrl: './admsidebar.component.html',
  styleUrls: ['./admsidebar.component.css']
})
export class AdmsidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoptoprofile(){
    this.router.navigate(['admin'])
  }
  gotousers(){
    this.router.navigate(['admin/users'])
  }
  dietfun(){
    this.router.navigate(['admin/dietcat'])
  }
  gotoemployee(){
    this.router.navigate(['admin/emp'])
  }
  gotocompetition(){
    this.router.navigate(['admin/comp'])
  }
  messagefun(){
    this.router.navigate(['admin/msg'])
  }
  reviewfun(){
    this.router.navigate(['admin/rev'])
  }
  testimonialsfun(){
    this.router.navigate(['admin/testimonial'])
  }
  webinfofun(){
    this.router.navigate(['admin/webinfo'])
  }
}
