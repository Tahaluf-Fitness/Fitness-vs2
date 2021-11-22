import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private spiner: NgxSpinnerService, private router: Router, private http: HttpClient, public authS: AuthService, private toastr: ToastrService, private dialog: MatDialog) { }

  data: any = [{}]

  GetInfo() {
    this.http.get('https://localhost:44303/api/WebSiteInfo').subscribe((res => {
      this.data = res;
    }))
  }

  update(data: any) {
    this.spiner.show();
    this.http.put('https://localhost:44303/api/WebSiteInfo/', data).subscribe((res: any) => {
      this.toastr.success('Info updated succsessfuly');
      this.spiner.hide();

    }, err => {
      this.spiner.hide();
      this.toastr.error('Not Updated');

    })
  }


}
