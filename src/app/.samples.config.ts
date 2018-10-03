import { environment } from '../environments/environment';

export default {
 oidc: {
   clientId: '0oagfyv9iuDw0rDri0h7',
   issuer: 'https://identity-np.swissre.com/oauth2/ausggbrfgxYHfA9FH0h7',
   redirectUri: environment.redirrectUrl,
   scope: 'openid',
 },
 resourceServer: {
   messagesUrl: 'https://netcore-api1.azurewebsites.net/api/values/beer',
   amazonBeersUrl: 'https://netcore-api1.azurewebsites.net/api/values/amazonbeer',
   carsUrl: 'https://netcore-api1.azurewebsites.net/api/values/cars',
   userUrl: 'https://netcore-api1.azurewebsites.net/api/values/user',
  // messagesUrl: 'http://localhost:8000/secured/beers',
  // userUrl: 'http://localhost:8000/user',
  // carsUrl: 'http://localhost:8000/cars',
 },
};