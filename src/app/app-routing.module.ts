import { animate } from '@angular/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimateComponent } from './animate/animate.component';
import { HomeComponent } from './home/home.component';
import { JustCurrentuserValueComponent } from './just-currentuser-value/just-currentuser-value.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'just-currentuser-value', component: JustCurrentuserValueComponent },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module')
      .then(mod => mod.AuthModule)
  },
  { path: 'animate', component: AnimateComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
