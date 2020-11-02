import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/* app pages */
import {ButtonsPageComponent} from './pages/buttons-page/buttons-page.component';
import {CardsPageComponent} from './pages/cards-page/cards-page.component';
import {ColorsPageComponent} from './pages/colors-page/colors-page.component';
import {FontsPageComponent} from './pages/fonts-page/fonts-page.component';
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
    path: 'fonts',
    pathMatch: 'full',
    component: FontsPageComponent,
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
