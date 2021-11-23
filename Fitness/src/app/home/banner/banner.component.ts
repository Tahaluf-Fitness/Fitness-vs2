import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(public infoS:InfoService,private router:Router) { }
  @Input () logo:string|undefined;
  @Input () backgroundImage:string|undefined;
  ngOnInit(): void {
    this.infoS.GetInfo()
  }

  goToAboutUs(){
    this.router.navigate(['aboutus']);
  }

}
