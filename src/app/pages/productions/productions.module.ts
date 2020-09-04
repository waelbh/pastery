import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionsRoutingModule } from './productions-routing.module';
import { ProductionsComponent } from './productions.component';
import { OrderProductionComponent } from './order-production/order-production.component';
import { ProduitComponent } from './produit/produit.component';
import { RecetteComponent } from './recette/recette.component';
import { NbCardModule, NbUserModule, NbButtonModule, NbTabsetModule, NbActionsModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbStepperModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { AddproductComponent } from './produit/addproduct/addproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LigneRecetteComponent } from './produit/ligne-recette/ligne-recette.component';



@NgModule({
  declarations: [ProductionsComponent, OrderProductionComponent, ProduitComponent, RecetteComponent, AddproductComponent, LigneRecetteComponent],
  imports: [
    CommonModule,
    ProductionsRoutingModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NgxEchartsModule,
    NbStepperModule,
    FormsModule,
 ReactiveFormsModule ,
 NbInputModule,

  ]
})
export class ProductionsModule { }
