import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusRoutingModule } from './aboutus-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { BannerComponent } from './banner/banner.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    IndexComponent,
    BannerComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    SharedModule
  ]
})
export class AboutusModule { }
