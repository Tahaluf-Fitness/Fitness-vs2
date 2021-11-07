import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietReportsComponent } from './diet-reports/diet-reports.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
{
  path:'',
  component:ProfileComponent
},
{
  path:'users',
  component:UsersComponent
},
{
  path:'employees',
  component:EmployeesComponent
},
{
  path:'reports',
  component:DietReportsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountantRoutingModule { }
