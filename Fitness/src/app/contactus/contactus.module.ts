import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { IndexComponent } from './index/index.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    HomeModule
  ]
})
export class ContactusModule { }
