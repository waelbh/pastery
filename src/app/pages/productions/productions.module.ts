import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionsRoutingModule } from './productions-routing.module';
import { ProductionsComponent } from './productions.component';
import { OrderProductionComponent } from './order-production/order-production.component';
import { ProduitComponent } from './produit/produit.component';
import { RecetteComponent } from './recette/recette.component';


@NgModule({
  declarations: [ProductionsComponent, OrderProductionComponent, ProduitComponent, RecetteComponent],
  imports: [
    CommonModule,
    ProductionsRoutingModule
  ]
})
export class ProductionsModule { }
