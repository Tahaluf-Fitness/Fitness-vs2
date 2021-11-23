import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BestfoodsService } from 'src/app/services/bestfoods.service';

@Component({
  selector: 'app-bestbody',
  templateUrl: './bestbody.component.html',
  styleUrls: ['./bestbody.component.css']
})
export class BestbodyComponent implements OnInit {
  @Input() BestFoodId: number | undefined
  @Input() title: string | undefined
  @Input() description: string | undefined
  @Input() Imagefood: string | undefined
  @Input() subtitle: string | undefined
  constructor(private router: Router, public best: BestfoodsService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  Delete(){
    if(this.BestFoodId){
      debugger
      this.best.DeletebyID(this.BestFoodId);
      this.toastr.success('Deleted Item');
    }
    else {
      this.toastr.warning('This item cannot be deleted')
    }
  }
}
