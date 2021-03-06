import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { DietcategoryComponent } from './dietcategory/dietcategory.component';
import { SharedModule } from '../shared/shared.module';
import { AdmnavbarComponent } from './component/admnavbar/admnavbar.component';
import { AdmsidebarComponent } from './component/admsidebar/admsidebar.component';
import { AdmfooterComponent } from './component/admfooter/admfooter.component';
import { UsersComponent } from './users/users.component';
import { EmployeesComponent } from './employees/employees.component';
import { MessageComponent } from './message/message.component';
import { ReviewtoadmComponent } from './reviewtoadm/reviewtoadm.component';
import { WebinfoadmComponent } from './webinfoadm/webinfoadm.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { EmployeeTableComponent } from './employees/employee-table/employee-table.component';
import { DietTableComponent } from './dietcategory/diet-table/diet-table.component';
import { CreateComponent } from './employees/create/create.component';
import { CardsComponent } from './message/cards/cards.component';
import { CardsreComponent } from './reviewtoadm/cardsre/cardsre.component';
import { FormadComponent } from './adminprofile/formad/formad.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportTableComponent } from './reports/report-table/report-table.component';
import { FormweComponent } from './webinfoadm/formwe/formwe.component';
import { CreateReportComponent } from './reports/create-report/create-report.component';
import { BestfoodComponent } from './bestfood/bestfood.component';
import { CreatebestComponent } from './bestfood/createbest/createbest.component';
import { CardfoodComponent } from './bestfood/cardfood/cardfood.component';



@NgModule({
  declarations: [
    AdminprofileComponent,
    DietcategoryComponent,
    AdmnavbarComponent,
    AdmsidebarComponent,
    AdmfooterComponent,
    UsersComponent,
    EmployeesComponent,
    MessageComponent,
    ReviewtoadmComponent,
    WebinfoadmComponent,
    UsersTableComponent,
    EmployeeTableComponent,
    DietTableComponent,
    CreateComponent,
    CardsComponent,
    CardsreComponent,
    FormadComponent,
    ReportsComponent,
    ReportTableComponent,
    FormweComponent,
    CreateReportComponent,
    BestfoodComponent,
    CreatebestComponent,
    CardfoodComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
