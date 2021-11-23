import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BestfoodsService } from 'src/app/services/bestfoods.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() BestFoodId: number | undefined
  @Input() title: string | undefined
  @Input() description: string | undefined
  @Input() Imagefood: string | undefined
  @Input() subtitle: string | undefined
  constructor(private router: Router, public bestfood: BestfoodsService, private toastr: ToastrService) { }


  ngOnInit(): void {
  }
  Read(){
    
  }

}
