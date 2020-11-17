import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/* app pages */
import {ButtonsPageComponent} from './pages/buttons-page/buttons-page.component';
import {CardsPageComponent} from './pages/cards-page/cards-page.component';
import {ColorsPageComponent} from './pages/colors-page/colors-page.component';
import {ExpansionPageComponent} from './pages/expansion-page/expansion-page.component';
import {FontsPageComponent} from './pages/fonts-page/fonts-page.component';
import {FormsPageComponent} from './pages/forms-page/forms-page.component';
import {IconsPageComponent} from './pages/icons-page/icons-page.component';
import {InputsPageComponent} from './pages/inputs-page/inputs-page.component';
import {TabsPageComponent} from './pages/tabs-page/tabs-page.component';
import {ToolbarPageComponent} from './pages/toolbar-page/toolbar-page.component';
import {WelcomePageComponent} from './pages/welcome-page/welcome-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: 'buttons',
    pathMatch: 'full',
    component: ButtonsPageComponent,
  },
  {
    path: 'cards',
    pathMatch: 'full',
    component: CardsPageComponent,
  },
  {
    path: 'colors',
    pathMatch: 'full',
    component: ColorsPageComponent,
  },
  {
    path: 'expansion',
    pathMatch: 'full',
    component: ExpansionPageComponent,
  },
  {
    path: 'fonts',
    pathMatch: 'full',
    component: FontsPageComponent,
  },
  {
    path: 'forms',
    pathMatch: 'full',
    component: FormsPageComponent,
  },
  {
    path: 'icons',
    pathMatch: 'full',
    component: IconsPageComponent,
  },
  {
    path: 'inputs',
    pathMatch: 'full',
    component: InputsPageComponent,
  },
  {
    path: 'tabs',
    pathMatch: 'full',
    component: TabsPageComponent,
  },
  {
    path: 'toolbar',
    pathMatch: 'full',
    component: ToolbarPageComponent,
  },
  {
    path: 'welcome',
    pathMatch: 'full',
    component: WelcomePageComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
