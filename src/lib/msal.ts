import { PublicClientApplication } from '@azure/msal-browser';
import * as secrets from './secrets.json'

const msalInstance = new PublicClientApplication({
    auth: {
        clientId: secrets.clientId,
        authority: secrets.authority
    },
    cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: false,
    },
});

await msalInstance.initialize();
await msalInstance.handleRedirectPromise();

export { msalInstance };
