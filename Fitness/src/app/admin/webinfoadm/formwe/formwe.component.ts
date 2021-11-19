import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-formwe',
  templateUrl: './formwe.component.html',
  styleUrls: ['./formwe.component.css']
})
export class FormweComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,private toastr:ToastrService,public infoS:InfoService) {} 

  ngOnInit(): void {
  }

  @Input () webId:number|undefined;
  @Input () webSiteName:string|undefined;
  @Input () logo:string|undefined;
  @Input () backgroundImage:string|undefined;
  @Input () phoneNumber1:number|undefined;
  @Input () email:string|undefined;
  @Input () country:string|undefined;
  @Input () city:string|undefined;
  @Input () facebookLink:string|undefined;
  @Input () instgramLink:string|undefined;
  @Input () twiterLink:string|undefined;

  formGroup =new FormGroup({
    webSiteName:new FormControl(''),
    logo:new FormControl(''),
    backgroundImage:new FormControl(''),
    phoneNumber1:new FormControl(''),
    email:new FormControl(''),
    country:new FormControl(''),
    city:new FormControl(''),
    facebookLink:new FormControl(''),
    instgramLink:new FormControl(''),
    twiterLink:new FormControl(''),
  })

  webSiteName1:string|undefined;
  logo1:string|undefined;
  backgroundImage1:string|undefined;
  email1:string|undefined;
  phoneNumber2:any;
  country1:string|undefined;
  city1:string|undefined;
  facebookLink1:string|undefined;
  instgramLink1:string|undefined;
  twiterLink1:string|undefined;

  saveItem(){
    this.webSiteName1=this.formGroup.value.webSiteName;
    this.logo1=this.formGroup.value.logo;
    this.backgroundImage1=this.formGroup.value.backgroundImage;
    this.phoneNumber2=this.formGroup.value.phoneNumber1;
    this.email1=this.formGroup.value.email;
    this.country1=this.formGroup.value.country;
    this.city1=this.formGroup.value.city;
    this.facebookLink1=this.formGroup.value.facebookLink;
    this.instgramLink1=this.formGroup.value.instgramLink;
    this.twiterLink1=this.formGroup.value.twiterLink;
    const data2={
      WebId:2,
      webSiteName:this.webSiteName1,
      logo:this.logo1,
      email:this.email1,
      backgroundImage:this.backgroundImage1,
      phoneNumber1:parseInt(this.phoneNumber2),
      country:this.country1,
      city:this.city1,
      facebookLink:this.facebookLink1,
      instgramLink:this.instgramLink1,
      twiterLink:this.twiterLink1
    }

    this.infoS.update(data2)
  }


}
