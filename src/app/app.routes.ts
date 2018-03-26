import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent, } from './app.component'
import { AboutComponent } from './about/about.component'
import { RidelibraryComponent } from './ridelibrary/ridelibrary.component'
import { RidecalendarComponent } from './ridecalendar/ridecalendar.component'
import { AppHomeComponent } from './apphome/app-home.component'

export const router: Routes = [
{path: '', redirectTo: 'apphome', pathMatch: 'full'},
{path: 'apphome', component: AppHomeComponent},
{path: 'ridecalendar', component: RidecalendarComponent},
{path: 'ridelibrary', component: RidelibraryComponent},
{path: 'about', component: AboutComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);