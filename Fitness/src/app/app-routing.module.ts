import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusModule } from './aboutus/aboutus.module';
import { AdminModule } from './admin/admin.module';
import { AutheraizationGuard } from './autheraization.guard';

const routes: Routes = [
  {
    path:'security',
    loadChildren :()=> import('./auth/auth.module').then ((m)=>m.AuthModule),
    
  },
  
  {
    path:'',
    loadChildren :()=> import('./home/home.module').then ((m)=>m.HomeModule)

  },
  {
    path:'aboutus',
    loadChildren :()=>AboutusModule

  },
  {
    path:'client',
    loadChildren :()=> import('./client/client.module').then ((m)=>m.ClientModule),
    // canActivate :[AutheraizationGuard]

  },
  {
    path:"admin", loadChildren:()=>AdminModule,
    // canActivate :[AutheraizationGuard]

  },
  
  {
    path:'accountant',
    loadChildren :()=> import('./accountant/accountant.module').then ((m)=>m.AccountantModule),
    // canActivate :[AutheraizationGuard]

  }
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],  exports: [RouterModule]
})
export class AppRoutingModule { }
