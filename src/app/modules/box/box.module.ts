import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { BoxesComponent } from './containers/boxes/boxes.component';
import { BoxItemComponent } from './components/box-item/box-item.component';
import { BoxDetailsComponent } from './containers/box-details/box-details.component';
import { BoxRoutingModule } from './box-routing.module';

@NgModule({
  declarations: [BoxesComponent, BoxItemComponent, BoxDetailsComponent],
  imports: [SharedModule, BoxRoutingModule],
})
export class BoxModule {}
