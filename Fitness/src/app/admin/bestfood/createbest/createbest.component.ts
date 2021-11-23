import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BestfoodsService } from 'src/app/services/bestfoods.service';

@Component({
  selector: 'app-createbest',
  templateUrl: './createbest.component.html',
  styleUrls: ['./createbest.component.css']
})
export class CreatebestComponent implements OnInit {

  formGroup =new FormGroup({
    Title:new FormControl('',Validators.required),
    Descriptions:new FormControl('',Validators.required),
    ImageFood:new FormControl(''),
    Subtitle:new FormControl('',Validators.required)
  })

  constructor(private bestf:BestfoodsService) { }

  ngOnInit(): void {
  }
  title2:any;
  descr:any;
  imgfo:any;
  subt:any
  
  saveItem(){
    debugger
    this.title2=this.formGroup.value.Title;
    this.descr=this.formGroup.value.Descriptions;
    this.imgfo=this.formGroup.value.ImageFood;
    this.subt=this.formGroup.value.Subtitle;
    const data2={
      titleName:this.title2.toString(),
      descrp:parseInt(this.descr),
      imgfood: this.imgfo.toString(),
      subtl:this.subt.toString()
    }
    this.bestf.create(data2);
    window.location.reload();

  }

}
