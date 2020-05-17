import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'estados',
    loadChildren: () => import('./page/estados/estados.module').then( m => m.EstadosPageModule)
  },
  {
    path: 'estado/:estado',
    loadChildren: () => import('./page/estado/estado.module').then( m => m.EstadoPageModule)
  },
  {
    path: 'paises',
    loadChildren: () => import('./page/paises/paises.module').then( m => m.PaisesPageModule)
  },
  {
    path: 'pais/:pais',
    loadChildren: () => import('./page/pais/pais.module').then( m => m.PaisPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
