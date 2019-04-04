import {RouterModule, Routes} from '@angular/router';
import {InfoComponent} from './info/info.component';
import {LabComponent} from './lab/lab.component';

const appRoutes: Routes = [
  {path: 'info', component: InfoComponent},
  {path: '', component: LabComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
