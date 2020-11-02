import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/* app pages */
import {WelcomePageComponent} from './pages/welcome-page/welcome-page.component';
import {ButtonsPageComponent} from './pages/buttons-page/buttons-page.component';
import {CardsPageComponent} from './pages/cards-page/cards-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: 'welcome',
    pathMatch: 'full',
    component: WelcomePageComponent,
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
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
