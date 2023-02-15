import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/books',
        name: '::Menu:Book',
        iconClass: 'fas fa-book',
        order: 2,
        layout: eLayoutType.application,
        
      },
      {
        path: '/authors',
        name: '::Menu:Author',
        iconClass: 'fas fa-feather',
        order: 2,
        layout: eLayoutType.application,
      },
      {
        path: '/publishers',
        name: '::Menu:Publisher',
        iconClass: 'fas fa-certificate',
        order: 3,
        layout: eLayoutType.application,
      },
    ]);
  };
}
