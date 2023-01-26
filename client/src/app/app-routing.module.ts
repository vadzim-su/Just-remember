import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './pages/auth-page/auth.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin-page/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth-page/auth.module').then((m) => m.AuthModule),
  },

  // {
  //   path: '',
  //   children: [{ path: 'login' }, { path: 'register' }, { path: 'settings' }],
  // },
];

@NgModule({
  declarations: [],
  exports: [RouterModule, SharedModule, AuthModule, ReactiveFormsModule],
  imports: [RouterModule.forRoot(routes), SharedModule, ReactiveFormsModule],
})
export class AppRoutingModule {}
