import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/admin-page/categories/categories.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin-page/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/admin-page/admin.module').then((m) => m.AdminModule),
  },

  // {
  //   path: '',
  //   children: [{ path: 'login' }, { path: 'register' }, { path: 'settings' }],
  // },
];

@NgModule({
  declarations: [CategoriesComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
