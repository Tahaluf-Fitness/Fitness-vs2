import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusModule } from './aboutus/aboutus.module';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';

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
    loadChildren :()=> import('./client/client.module').then ((m)=>m.ClientModule)
  },
  {
    path:"admin", loadChildren:()=>AdminModule
  },
  {
    path:'contact',
    loadChildren :()=> import('./contactus/contactus.module').then ((m)=>m.ContactusModule)
  },
  {
    path:'accountant',
    loadChildren :()=> import('./accountant/accountant.module').then ((m)=>m.AccountantModule)
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
