import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { DietsComponent } from './diets/diets.component';
import { MeasurmentsComponent } from './measurments/measurments.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProfileComponent,
    DietsComponent,
    MeasurmentsComponent,
    CompetitionsComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule  
  ]
})
export class ClientModule { }
