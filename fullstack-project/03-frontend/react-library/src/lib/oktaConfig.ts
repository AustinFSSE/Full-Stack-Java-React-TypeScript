
export const oktaConfig = {
    clientId: '0oao8cmzetNFIJolo5d7',
    issuer: 'https://dev-20573903.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
};