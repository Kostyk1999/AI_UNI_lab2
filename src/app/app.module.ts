import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {InfoComponent} from './info/info.component';
import {routing} from './app.routing';
import {LabComponent} from './lab/lab.component';
import {DataTablesModule} from 'angular-datatables';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    LabComponent
  ],
  imports: [
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
