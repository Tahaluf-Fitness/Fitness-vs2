import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusModule } from './aboutus/aboutus.module';
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
    path:'contact',
    loadChildren :()=> import('./contactus/contactus.module').then ((m)=>m.ContactusModule)
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
