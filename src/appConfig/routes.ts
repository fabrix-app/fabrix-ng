import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/spools/home/home.module#HomeModule'
  },
  {
    path: '500',
    loadChildren: 'app/spools/500/500.module#FiveZeroZeroModule'
  },
  {
    path: '404',
    loadChildren: 'app/spools/404/404.module#FourZeroFourModule'
  },
  {
    path: '**',
    redirectTo: '/404'
  }
]
