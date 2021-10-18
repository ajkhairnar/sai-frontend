import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'login',
    loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'dashboard',
    loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'user',
    loadChildren: () => import('./module/user/user.module').then(m => m.UserModule),
    canActivate:[AuthGuard]
  },
  {
    path:'service',
    loadChildren: () => import('./module/services/services.module').then(m => m.ServicesModule),
    canActivate:[AuthGuard]
  },
  {
    path:'admin',
    loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule),
    canActivate:[AuthGuard]
  },
  {
    path:'area',
    loadChildren: () => import('./module/area/area.module').then(m => m.AreaModule),
    canActivate:[AuthGuard]
  },
  {
    path:'milk',
    loadChildren:()=> import('./module/milk/milk.module').then(m=>m.MilkModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
