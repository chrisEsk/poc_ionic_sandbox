import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByAgeComponent } from './by-age/by-age.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'by-age', component: ByAgeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
