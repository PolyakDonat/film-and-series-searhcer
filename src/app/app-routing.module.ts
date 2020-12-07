import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpeningComponent } from './pages/opening/opening.component';
import {SearcherComponent} from "./pages/searcher/searcher.component";
import {AuthenticationGuard} from "./guards/authentication.guard";

const routes: Routes = [
  { path: 'login', component: OpeningComponent },
  { path: 'searcher', component: SearcherComponent, canActivate: [AuthenticationGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
