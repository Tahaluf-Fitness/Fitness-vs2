import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusModule } from './aboutus/aboutus.module';

const routes: Routes = [
  {
    path:'security',
    loadChildren :()=> import('./auth/auth.module').then ((m)=>m.AuthModule),
    
  },
  
  {
    path:'home',
    loadChildren :()=> import('./home/home.module').then ((m)=>m.HomeModule)

  },
  {
    path:'aboutus',
    loadChildren :()=>AboutusModule

  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
