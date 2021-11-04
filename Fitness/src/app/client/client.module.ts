import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AsideComponent } from './components/aside/aside.component';
import { BoxesComponent } from './components/boxes/boxes.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { DietsComponent } from './diets/diets.component';
import { MeasurmentsComponent } from './measurments/measurments.component';
import { CompetitionsComponent } from './competitions/competitions.component';


@NgModule({
  declarations: [
    AsideComponent,
    BoxesComponent,
    NavComponent,
    ProfileComponent,
    DietsComponent,
    MeasurmentsComponent,
    CompetitionsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    

    
  ],exports:[
    AsideComponent,
    BoxesComponent,
    NavComponent
  ]
})
export class ClientModule { }
