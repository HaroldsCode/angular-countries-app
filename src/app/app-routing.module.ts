import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { RegionsComponent } from './pages/regions/regions.component';
import { CountriesComponent } from './pages/countries/countries.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },{
    path: 'countries',
    component: CountriesComponent,
    pathMatch: 'full'
  },{
    path: 'regions',
    component: RegionsComponent,
    pathMatch: 'full'
  },{
    path: 'cities',
    component: CitiesComponent,
    pathMatch: 'full'
  },{
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
