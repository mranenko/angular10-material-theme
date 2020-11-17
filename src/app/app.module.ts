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
import { ColorsPageComponent } from './pages/colors-page/colors-page.component';
import { FontsPageComponent } from './pages/fonts-page/fonts-page.component';
import { ToolbarPageComponent } from './pages/toolbar-page/toolbar-page.component';
import { TabsPageComponent } from './pages/tabs-page/tabs-page.component';
import { ExpansionPageComponent } from './pages/expansion-page/expansion-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { IconsPageComponent } from './pages/icons-page/icons-page.component';
import { InputsPageComponent } from './pages/inputs-page/inputs-page.component';


const appPages = [
  WelcomePageComponent,
  ButtonsPageComponent,
  CardsPageComponent,
];


@NgModule({
  declarations: [
    AppComponent,
    ...appPages,
    ColorsPageComponent,
    FontsPageComponent,
    ToolbarPageComponent,
    TabsPageComponent,
    ExpansionPageComponent,
    FormsPageComponent,
    IconsPageComponent,
    InputsPageComponent,
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
