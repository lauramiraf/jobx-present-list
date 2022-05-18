import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PresentGroupComponent } from './components/present-group/present-group.component';
import { PresentGroupListComponent } from './components/present-group-list/present-group-list.component';
import { InformativeMessageComponent } from './components/informative-message/informative-message.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentGroupComponent,
    PresentGroupListComponent,
    InformativeMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
