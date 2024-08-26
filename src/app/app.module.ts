import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LinesComponent } from './components/lines/lines.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { CustomDatePipe } from './custom-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinesComponent,
    HomeComponent,
    ScheduleComponent,
    CustomDatePipe,
    NewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
