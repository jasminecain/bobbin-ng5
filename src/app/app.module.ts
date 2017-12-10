import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BobbinApp } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponentComponent } from './component/login-component/login-component.component';

@NgModule({
  declarations: [
    BobbinApp,
    HomePageComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BobbinApp]
})
export class AppModule {}
