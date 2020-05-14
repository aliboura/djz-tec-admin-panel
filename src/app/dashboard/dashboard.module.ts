import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '../layout/layout.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardtestComponent } from './dashboardtest/dashboardtest.component';



@NgModule({
  declarations: [DashboardComponent, DashboardtestComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule ,
    FormsModule,
    BrowserAnimationsModule
  ]
})
export class DashboardModule { }
