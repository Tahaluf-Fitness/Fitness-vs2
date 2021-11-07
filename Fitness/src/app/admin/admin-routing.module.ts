import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { CompetitionComponent } from './competition/competition.component';
import { DietcategoryComponent } from './dietcategory/dietcategory.component';
import { EmployeesComponent } from './employees/employees.component';
import { MessageComponent } from './message/message.component';
import { ReviewtoadmComponent } from './reviewtoadm/reviewtoadm.component';
import { TestimonialsforadmComponent } from './testimonialsforadm/testimonialsforadm.component';
import { UsersComponent } from './users/users.component';
import { WebinfoadmComponent } from './webinfoadm/webinfoadm.component';

const routes: Routes = [
  {
    path:'',component:AdminprofileComponent
  },
  {
    path:'dietcat',component:DietcategoryComponent
  },
  {
    path:'users',component:UsersComponent
  },
  {
    path:'emp',component:EmployeesComponent
  },
  {
    path:'comp',component:CompetitionComponent
  },
  {
    path:'msg',component:MessageComponent
  },
  {
    path:'rev',component:ReviewtoadmComponent
  },
  {
    path:'testimonial',component:TestimonialsforadmComponent
  },
  {
    path:'webinfo',component:WebinfoadmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }