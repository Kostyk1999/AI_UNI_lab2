import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {InfoComponent} from './info/info.component';
import {routing} from './app.routing';
import {LabComponent} from './lab/lab.component';
import {DataTablesModule} from 'angular-datatables';
import {FormsModule} from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import {ChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    LabComponent,
    ResultsComponent,

  ],
  imports: [
    ChartsModule,
    BrowserModule,
    FormsModule,
    DataTablesModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
