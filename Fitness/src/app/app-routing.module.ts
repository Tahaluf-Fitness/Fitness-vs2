import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusModule } from './aboutus/aboutus.module';
import { AdminModule } from './admin/admin.module';
import { AutheraizationGuard } from './autheraization.guard';
import { BestfoodModule } from './bestfood/bestfood.module';
import { ProductModule } from './product/product.module';

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
    path:'diet',
    loadChildren :()=> ProductModule

  },
  {
    path:'aboutus',
    loadChildren :()=>AboutusModule

  },
  { path:'bestfood', loadChildren:()=>BestfoodModule},
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