import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxesComponent } from './containers/boxes/boxes.component';
import { BoxDetailsComponent } from './containers/box-details/box-details.component';
import { AuthenticationGuard } from '@core/guards/authentication.guard';
import { BoxDetailsResolver } from '@core/resolvers/box-details.resolver';
const routes: Routes = [
  {
    path: 'boxes',
    component: BoxesComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'boxes/:id',
    component: BoxDetailsComponent,
    resolve: { boxDetails: BoxDetailsResolver },
    canActivate: [AuthenticationGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxRoutingModule {}
