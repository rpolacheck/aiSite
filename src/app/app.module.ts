import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageViewModule } from './components/page-view/page-view.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PageViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
