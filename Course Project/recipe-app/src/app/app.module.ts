import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipieListComponent } from './recipes/recipie-list/recipie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipieListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
