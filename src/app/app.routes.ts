import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tabla' },
  {
    path: 'tabla',
    loadChildren: () => import('./features/tabla/tabla.module').then((m) => m.TablaModule),
  },
  {
    path: 'formulario',
    loadChildren: () =>
      import('./features/formulario/formulario.module').then((m) => m.FormularioModule),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register.component').then((m) => m.RegisterComponent), // Ensure this path is correct
  },

  { path: '**', redirectTo: 'tabla' },
];
