import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent, } from './app.component'
import { RidecalendarComponent } from './ridecalendar/ridecalendar.component'
import { RidelibraryComponent } from './ridelibrary/ridelibrary.component'

export const router: Routes = [
 //{path: '', redirectTo: 'ridecalendar', pathMatch: 'full'},
{path: 'ridecalendar', component: RidecalendarComponent},
{path: 'ridelibrary', component: RidelibraryComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);