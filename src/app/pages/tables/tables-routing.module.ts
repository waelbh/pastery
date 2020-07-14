import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';

import { TreeGridComponent } from './tree-grid/tree-grid.component';
import {  MatierePremiereComponent } from './matiere-premiere/matiere-premiere.component';

import { LtMatPrComponent } from './lt-mat-pr/lt-mat-pr.component';
import { ModifierStockComponent } from './modifier-stock/modifier-stock.component';
import { SelMatComponent } from './sel-mat/sel-mat.component';
import { DepotComponent } from './depot/depot.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'matiere-premiere',
      component: MatierePremiereComponent,
    },
    { path: 'list-mat-prem',
      component: LtMatPrComponent,
    },
    {path: 'editer-stock',
    component: ModifierStockComponent,
   },
   {path: 'editer-stock/sel-mat/:id',
    component: SelMatComponent,
   },
   {path: 'depot', component: DepotComponent},

    {
      path: 'tree-grid',
      component: TreeGridComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  MatierePremiereComponent,
  LtMatPrComponent,
  ModifierStockComponent,
  SelMatComponent,
  DepotComponent,
  TreeGridComponent,
];
