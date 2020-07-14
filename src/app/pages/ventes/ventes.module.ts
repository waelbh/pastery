import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentesRoutingModule } from './ventes-routing.module';
import { VentesComponent } from './ventes.component';
import { BonCommandeComponent } from './bon-commande/bon-commande.component';
import { ClientsComponent } from './clients/clients.component';
import { FacturesComponent } from './factures/factures.component';


@NgModule({
  declarations: [VentesComponent, BonCommandeComponent, ClientsComponent, FacturesComponent],
  imports: [
    CommonModule,
    VentesRoutingModule
  ]
})
export class VentesModule { }
