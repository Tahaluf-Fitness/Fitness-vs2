import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BestfoodsService } from 'src/app/services/bestfoods.service';
import { CreatebestComponent } from './createbest/createbest.component';

@Component({
  selector: 'app-bestfood',
  templateUrl: './bestfood.component.html',
  styleUrls: ['./bestfood.component.css']
})
export class BestfoodComponent implements OnInit {

  constructor(private router:Router,public best:BestfoodsService,private toastr:ToastrService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllData()
  }

  getAllData(){
    this.best.getAllBestFood()

  }
  addBestFood(){
    this.dialog.open(CreatebestComponent)
  }
}
