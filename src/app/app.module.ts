import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BobbinApp } from './app.component';

@NgModule({
  declarations: [
    BobbinApp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BobbinApp]
})
export class AppModule {}
