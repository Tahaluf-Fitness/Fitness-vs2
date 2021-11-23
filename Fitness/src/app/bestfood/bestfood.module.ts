import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestfoodRoutingModule } from './bestfood-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './index/card/card.component';



@NgModule({
  declarations: [
    IndexComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BestfoodRoutingModule,
    SharedModule
  ]
})
export class BestfoodModule { }
