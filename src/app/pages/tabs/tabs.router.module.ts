import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'entities',
        children: [
          {
            path: '',
            loadChildren: '../entities/entities.module#EntitiesPageModule'
          }
        ]
      },
      {
        path: 'badges',
        children: [
          {
            path: '',
            loadChildren: '../account/account.module#AccountPageModule'
          }
        ]
      },
      {
        path: 'admin',
        children: [
          {
            path: '',
            loadChildren: '../admin-points/admin-points.module#AdminPointsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
