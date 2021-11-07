import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionsComponent } from './competitions/competitions.component';
import { DietsComponent } from './diets/diets.component';
import { LayoutComponent } from './layout/layout.component';
import { MeasurmentsComponent } from './measurments/measurments.component';
import { ProfileComponent } from './profile/profile.component';

// const routes: Routes = [
//   {
//     path:'',
//     component:ProfileComponent

//   },
//   {
//     path:'diet',
//     component:DietsComponent

//   },
//   {
//     path:'measurments',
//     component:MeasurmentsComponent

//   },
//   {
//     path:'competitions',
//     component:CompetitionsComponent

//   }

// ];

const DashboardChildrenRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProfileComponent
  },
  {
    path: 'diet',
    pathMatch: 'full',
    component: DietsComponent
  },
  {
    path: 'measurments',
    pathMatch: 'full',
    component: MeasurmentsComponent
  },
  {
    path: 'competitions',
    pathMatch: 'full',
    component: CompetitionsComponent
  }
];

  const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: DashboardChildrenRoute
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
