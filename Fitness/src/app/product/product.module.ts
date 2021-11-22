import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { ProductMeasComponent } from './index/product-meas/product-meas.component';
import { PaymentComponent } from './index/payment/payment.component';


@NgModule({
  declarations: [
    IndexComponent,
    NavComponent,
    ProductMeasComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
