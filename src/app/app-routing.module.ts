import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandpageComponent } from './landpage/landpage.component';

const routes: Routes = [
  { path:'', redirectTo:'landpage', pathMatch:'full'},
  { path:'landpage', component: LandpageComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
