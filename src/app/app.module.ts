import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UxaButtonModule } from '@ux-aspects-angular/button';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UxaButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
