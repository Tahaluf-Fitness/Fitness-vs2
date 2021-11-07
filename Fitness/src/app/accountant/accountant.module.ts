import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountantRoutingModule } from './accountant-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { BoxesComponent } from './components/boxes/boxes.component';
import { UsersComponent } from './users/users.component';
import { EmployeesComponent } from './employees/employees.component';
import { DietReportsComponent } from './diet-reports/diet-reports.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    FooterComponent,
    AsideComponent,
    BoxesComponent,
    UsersComponent,
    ProfileComponent,
    EmployeesComponent,
    DietReportsComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AccountantRoutingModule
  ],exports:[
    AsideComponent,
    FooterComponent,
    BoxesComponent

  ]
})
export class AccountantModule { }
