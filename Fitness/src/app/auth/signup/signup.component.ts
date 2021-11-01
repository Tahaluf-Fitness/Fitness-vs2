import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
 
})
export class SignupComponent implements OnInit {
   Day: Array<string> = [
  '1','2','3','4','5','6','7','8','9','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'
  ];
  Month: number[] = [
    1,2,3,4,5,6,7,8,9,10,11,12
    ];

    Year: number[] = [
      1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,
      1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,
      1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,
      2000,2001,2002,2003,2004,2005,2006,2007,2008,2009
      ];
  constructor() { }

  registerForm: FormGroup = new FormGroup({
    UserName: new FormControl('', [Validators.required]),
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, 
    Validators.email]),
    password: new FormControl('', [Validators.required, 
    Validators.minLength(8)]),
    Confirmpassword: new FormControl('', [Validators.required, 
      Validators.minLength(8)]),
      Gender: new FormControl('', [Validators.required]),
       phoneNumber: new FormControl(''),
       Dayy: new FormControl('', [Validators.required]),
       Monthh: new FormControl('', [Validators.required]),
       Yearr: new FormControl('', [Validators.required]),
       Country: new FormControl('', [Validators.required]),
       City: new FormControl('', [Validators.required]),
   
       JoinDate: new FormControl('', [Validators.required])
    })

    submit(){
      console.log(this.registerForm.controls);
    }
  ngOnInit(): void {
  }

}
