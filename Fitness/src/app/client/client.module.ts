import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { DietsComponent } from './diets/diets.component';
import { MeasurmentsComponent } from './measurments/measurments.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { MeasTableComponent } from './measurments/meas-table/meas-table.component';
import { MatPaginator } from '@angular/material/paginator';
import { UpdateComponent } from './measurments/update/update.component';
import { DietTableComponent } from './diets/diet-table/diet-table.component';
import { CreateComponent } from './measurments/create/create.component';
import { FormComponent } from './profile/form/form.component';



@NgModule({
  declarations: [
    ProfileComponent,
    DietsComponent,
    MeasurmentsComponent,
    CompetitionsComponent,
    LayoutComponent,
    MeasTableComponent,
    UpdateComponent,
    DietTableComponent,
    CreateComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
    
   
  ]
})
export class ClientModule { }
