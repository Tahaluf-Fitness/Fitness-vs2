import { Component, Input, OnInit } from '@angular/core';
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

  @Input () Name:string|undefined;
  @Input () Email:string|undefined;
  @Input () Subject:string|undefined;
  @Input () Message:string|undefined;


  formGroup =new FormGroup({
    Name:new FormControl('',Validators.required),
    Email:new FormControl('',[Validators.email,Validators.required]),
    Subject:new FormControl('',Validators.required),
    Message:new FormControl('',Validators.required) 
  })

  name2:any;
  email2:any;
  subject2:any;
  message2:any;

  saveItem(){
    this.name2=this.formGroup.value.Name;//c#
    this.email2=this.formGroup.value.Email;
    this.subject2=this.formGroup.value.Subject;
    this.message2=this.formGroup.value.Message;
  


    const data2={
      Name:this.name2,
      Email:this.email2,
      Subject:this.subject2,
      Message:this.message2
     
    }
    this.contactS.create(data2);
    window.location.reload();

  }

}
