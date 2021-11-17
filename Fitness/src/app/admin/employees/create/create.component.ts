import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public userS:UsersService) { }

  ngOnInit(): void {
  }

  formGroup =new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    phoneNumber1:new FormControl('',Validators.required),
    dateOfBirth:new FormControl(''),
    country:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    position:new FormControl('',Validators.required),
    salary:new FormControl('',Validators.required)
  })

  firstName1:any;
  lastName1:any;
  email1:any;
  gender1:any;
  phoneNumber2:any
  dateOfBirth1:Date | undefined
  country1:any
  city1:any
  position1:any
  salary1:any
  roleID=3
  password='123456'

  saveItem(){
    this.firstName1=this.formGroup.value.firstName;
    this.lastName1=this.formGroup.value.lastName;
    this.email1=this.formGroup.value.email;
    this.gender1=this.formGroup.value.gender;
    this.phoneNumber2=this.formGroup.value.phoneNumber1;
    this.dateOfBirth1=this.formGroup.value.dateOfBirth;
    this.country1=this.formGroup.value.country;
    this.city1=this.formGroup.value.city;
    this.position1=this.formGroup.value.position;
    this.salary1=this.formGroup.value.salary;

    const data={
      firstName:this.firstName1.toString(),
      lastName:this.lastName1.toString(),
      email:this.email1.toString(),

      gender:this.gender1.toString(),
      phoneNumber1:parseInt(this.phoneNumber2),
      password:this.password,
      confirmpassword:this.password,
      dateOfBirth:this.dateOfBirth1,
      country:this.country1.toString(),
      city:this.city1.toString(),
      position:this.position1.toString(),
      salary:parseInt(this.salary1),
      roleID:this.roleID
    }

    this.userS.addEmployee(data);
    window.location.reload();

  }

}
