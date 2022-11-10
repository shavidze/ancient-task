import { NgModule } from '@angular/core';

export const moduleImportGuard = (parentModule: NgModule, moduleName: string) => {
  if (parentModule) {
    throw new Error(
      `${moduleName} has already been loaded. Import Core modules in the AppModule only.`
    );
  }
};
