import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { WalletSumPipe } from '@shared/pipes/wallet-sum.pipe';
const SHARED_MODULES: any[] = [CommonModule, RouterModule];
const SHARED_PIPES: any[] = [WalletSumPipe];
const SHARED_COMPONENTS: any[] = [
  PageNotFoundComponent,
  FooterComponent,
  HeaderComponent,
  ContentComponent,
];
@NgModule({
  declarations: [...SHARED_COMPONENTS, ...SHARED_PIPES],
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS],
})
export class SharedModule {}
