import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public contactS:ContactService) { }

  ngOnInit(): void {
  }

  formGroup =new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required]),
    subject:new FormControl('',Validators.required),
    message:new FormControl('',Validators.required) 
  })

  name2:any;
  email2:any;
  subject2:any;
  message2:any;

  saveItem(){
    this.name2=this.formGroup.value.email;//c#
    this.email2=this.formGroup.value.name;
    this.subject2=this.formGroup.value.subject;
    this.message2=this.formGroup.value.message;
  


    const data2={
      name:this.name2,
      email:this.email2,
      subject:this.subject2,
      message:this.message2
     
    }
    this.contactS.create(data2);
    debugger
    window.location.reload();

  }

}
