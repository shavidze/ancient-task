import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxesComponent } from './containers/boxes/boxes.component';
import { BoxDetailsComponent } from './containers/box-details/box-details.component';
import { AuthenticationGuard } from '@core/guards/authentication.guard';
const routes: Routes = [
  {
    path: 'boxes',
    component: BoxesComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'boxes/:id',
    component: BoxDetailsComponent,
    canActivate: [AuthenticationGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxRoutingModule {}
