import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';



import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { DietcategoryComponent } from './dietcategory/dietcategory.component';
import { SharedModule } from '../shared/shared.module';
import { AdmnavbarComponent } from './component/admnavbar/admnavbar.component';
import { AdmsidebarComponent } from './component/admsidebar/admsidebar.component';
import { AdmfooterComponent } from './component/admfooter/admfooter.component';
import { AdmcontentComponent } from './component/admcontent/admcontent.component';
import { UsersComponent } from './users/users.component';
import { EmployeesComponent } from './employees/employees.component';
import { CompetitionComponent } from './competition/competition.component';
import { MessageComponent } from './message/message.component';
import { ReviewtoadmComponent } from './reviewtoadm/reviewtoadm.component';
import { TestimonialsforadmComponent } from './testimonialsforadm/testimonialsforadm.component';
import { WebinfoadmComponent } from './webinfoadm/webinfoadm.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { EmployeeTableComponent } from './employees/employee-table/employee-table.component';
import { DietTableComponent } from './dietcategory/diet-table/diet-table.component';



@NgModule({
  declarations: [
    AdminprofileComponent,
    DietcategoryComponent,
    AdmnavbarComponent,
    AdmsidebarComponent,
    AdmfooterComponent,
    AdmcontentComponent,
    UsersComponent,
    EmployeesComponent,
    CompetitionComponent,
    MessageComponent,
    ReviewtoadmComponent,
    TestimonialsforadmComponent,
    WebinfoadmComponent,
    UsersTableComponent,
    EmployeeTableComponent,
    DietTableComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
