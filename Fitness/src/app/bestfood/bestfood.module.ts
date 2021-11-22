import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestfoodRoutingModule } from './bestfood-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { BestbodyComponent } from './bestbody/bestbody.component';


@NgModule({
  declarations: [
    IndexComponent,
    BannerComponent,
    BestbodyComponent
  ],
  imports: [
    CommonModule,
    BestfoodRoutingModule,
    SharedModule
  ]
})
export class BestfoodModule { }
