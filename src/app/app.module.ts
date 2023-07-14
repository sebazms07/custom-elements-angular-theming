import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { BaseComponent } from './core/base/base.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    BaseComponent,
  ],
  imports: [
    CustomCardComponent,
    BrowserModule,
    AppRoutingModule,
    CustomButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
