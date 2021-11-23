import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BestfoodsService } from 'src/app/services/bestfoods.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // CurrentActiveFood: number = 0;
  constructor(private router: Router, public bestfood: BestfoodsService,
    public tostr: ToastrService,
    private spiner: NgxSpinnerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    // this.getAll;
  }
  // AlertActiveCourse() {

  //   this.bestfood.numberOfActiveFood.subscribe((value) => {

  //     this.CurrentActiveFood = value;
  //   })
  // }


  getAll() {
    this.spiner.show();
    debugger
    this.bestfood.getAllBestFood().subscribe((res: any) => {
      this.bestfood.data = res;
      this.spiner.hide();
      this.tostr.success('Data Retrived !!!')
    }, err => {
      this.spiner.hide();
      this.tostr.error('something want worring!!')
    })
  }

}
