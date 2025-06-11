import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxCardViewModule } from 'devextreme-angular/ui/card-view';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxCardViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
