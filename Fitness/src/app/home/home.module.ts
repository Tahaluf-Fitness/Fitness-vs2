import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { ReviewComponent } from './review/review.component';
import { DietsComponent } from './diets/diets.component';
import { SportsComponent } from './sports/sports.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    IndexComponent,
    BannerComponent,
    FeaturesComponent,
    ReviewComponent,
    DietsComponent,
    SportsComponent,
    TrainersComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports:[
    ContactComponent
  ]
})
export class HomeModule { }
