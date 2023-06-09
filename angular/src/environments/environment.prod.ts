import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookManagementABP',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44380/',
    redirectUri: baseUrl,
    clientId: 'BookManagementABP_App',
    responseType: 'code',
    scope: 'offline_access BookManagementABP',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44380',
      rootNamespace: 'BookManagementABP',
    },
  },
} as Environment;
