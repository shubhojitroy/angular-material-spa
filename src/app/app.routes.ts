import { Routes } from '@angular/router';
import { OfferComponent } from './pages/offer/offer.component';

export const routes: Routes = [
  {
    path: '',
    component: OfferComponent,
  },
  {
    path: 'privacy',
    loadComponent: () => {
      return import('./pages/privacy/privacy.component').then((file) => {
        return file.PrivacyComponent;
      });
    },
  },
  {
    path: 'terms',

    loadComponent: () => {
      return import('./pages/terms/terms.component').then((file) => {
        return file.TermsComponent;
      });
    },
  },
  {
    path: '',
    redirectTo: '/offer',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    component: OfferComponent,
  },
];
