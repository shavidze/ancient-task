import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { moduleImportGuard } from '@core/guards/module-imports';

@NgModule({
  declarations: [],
  imports: [BrowserModule],
  exports: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    moduleImportGuard(parentModule, 'CoreModule');
  }
}
