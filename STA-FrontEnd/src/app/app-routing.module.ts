import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthGuardService } from './authentication/guards/auth-guard.service';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('src/app/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [AuthGuardService]},
  { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule), canActivate: [AuthGuardService] },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuardService] },
  { path: 'customers', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule), canActivate: [AuthGuardService] },

  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
