import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LinesComponent } from './components/lines/lines.component';
import { HomeComponent } from './components/home/home.component';
import { BaseComponentComponent } from './components/base-component/base-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinesComponent,
    HomeComponent,
    BaseComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
