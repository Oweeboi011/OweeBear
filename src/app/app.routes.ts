import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppHomeComponent } from './pages/apphome/app-home.component';
import { RidelibraryComponent } from './pages/ridelibrary/ridelibrary.component';
import { RidecalendarComponent } from './pages/ridecalendar/ridecalendar.component';
import { AboutComponent } from './pages/about/about.component';


export const router: Routes = [
{path: '', redirectTo: 'apphome', pathMatch: 'full'},
{path: 'apphome', component: AppHomeComponent},
{path: 'ridecalendar', component: RidecalendarComponent},
{path: 'ridelibrary', component: RidelibraryComponent},
{path: 'about', component: AboutComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);