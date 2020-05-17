import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'estados',
        loadChildren:() => import('../page/estados/estados.module').then(m => m.EstadosPageModule)
      },
      {
        path: 'paises',
        loadChildren: () => import('../page/paises/paises.module').then( m => m.PaisesPageModule)
      },
      {
        path: '',
        redirectTo: 'estados',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
