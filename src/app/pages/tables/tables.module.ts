import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbLayoutModule, NbSelectComponent, NbSelectModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DepotComponent } from './depot/depot.component';




@NgModule({
  imports: [
    NbCardModule,
    FormsModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbSelectModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
  
  ],
})
export class TablesModule { }
