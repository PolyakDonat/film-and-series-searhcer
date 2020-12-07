import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpeningComponent } from './pages/opening/opening.component';

const routes: Routes = [
  { path: 'login', component: OpeningComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
