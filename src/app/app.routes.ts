import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppHomeComponent } from './pages/apphome/app-home.component';
import { RidelibraryComponent } from './pages/ridelibrary/ridelibrary.component';
import { RidecalendarComponent } from './pages/ridecalendar/ridecalendar.component';
import { AboutComponent } from './pages/about/about.component';

import { AppComponent, } from './app.component'

export const router: Routes = [
{path: '', redirectTo: 'apphome', pathMatch: 'full'},
{path: 'apphome', component: AppHomeComponent},
{path: 'ridelibrary', component: RidelibraryComponent},
{path: 'ridecalendar', component: RidecalendarComponent},
{path: 'about', component: AboutComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);