import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionsComponent } from './productions.component';
import { OrderProductionComponent } from './order-production/order-production.component';
import { RecetteComponent } from './recette/recette.component';
import { ProduitComponent } from './produit/produit.component';


const routes: Routes = [{
  path: '',
  component: ProductionsComponent,
  children: [
    {
      path: 'ordre',
      component: OrderProductionComponent,
    },
    { path: 'produit',
      component: ProduitComponent,
    },
    {path: 'recette',
    component: RecetteComponent,
    }
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionsRoutingModule { }
