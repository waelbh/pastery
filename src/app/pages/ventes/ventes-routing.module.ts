import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentesComponent } from './ventes.component';
import { ClientsComponent } from './clients/clients.component';
import { FacturesComponent } from './factures/factures.component';
import { BonCommandeComponent } from './bon-commande/bon-commande.component';



const routes: Routes = [{
  path: '',
  component: VentesComponent,
  children: [
    {
      path: 'clients',
      component: ClientsComponent,
    },
    { path: 'factures',
      component: FacturesComponent,
    },
    {path: 'bon-commande',
    component: BonCommandeComponent,
    }
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentesRoutingModule { }
