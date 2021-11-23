import { Component, Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BestfoodsService } from 'src/app/services/bestfoods.service';

@Component({
  selector: 'app-cardfood',
  templateUrl: './cardfood.component.html',
  styleUrls: ['./cardfood.component.css']
})
export class CardfoodComponent implements OnInit {
  @Input() BestFoodId: number | undefined
  @Input() title: string | undefined
  @Input() description: string | undefined
  @Input() Imagefood: string | undefined
  @Input() subtitle: string | undefined
  constructor(private router: Router, public bestf: BestfoodsService, private toastr: ToastrService) { }


  ngOnInit(): void {
  }
  Read(){

  }

// if(this.contactId){
//     debugger
//     this.msgS.DeletebyID(this.contactId);
//   }
//   else {
//     this.toastr.warning('This item cannot be deleted')
//   }
  Delete(){
    if(this.BestFoodId){
      debugger
      this.bestf.DeletebyID(this.BestFoodId);
      this.toastr.success('Deleted Item');
    }
    else {
      this.toastr.warning('This item cannot be deleted')
    }
  }

}
