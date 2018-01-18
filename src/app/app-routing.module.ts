import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';

const routes: Routes = [
  { path: 'chat/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HeroSearchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
