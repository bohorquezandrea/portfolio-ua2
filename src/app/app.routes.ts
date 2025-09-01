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
  { path: '**', redirectTo: 'tabla' },
];
