import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';

/* material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

/* app pages */
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';


const appPages = [
  WelcomePageComponent,
  ButtonsPageComponent,
  CardsPageComponent,
];


@NgModule({
  declarations: [
    AppComponent,
    ...appPages,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {
}
