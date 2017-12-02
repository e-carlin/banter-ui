// import {
//     saveUserToLocalStorage,
//     getUserFromLocalStorage,
//   } from './localStorage';
  
  const URL_BASE = 'http://localhost:5000';
  const DEFAULT_HEADERS = new Headers({
    'Content-Type': 'application/json',
  });
  
  const fetchHelper = (
    {
      url,
      headers = DEFAULT_HEADERS,
      body,
      method = 'GET',
    },
  ) => {
    return fetch(`${URL_BASE}/${url}`, {
      headers,
      method,
      body,
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        // throw new Error('Unauthorized');
      })
      .catch((e) => { return console.error(e); });
  };
  
//   export const login = (username, password) => {
//     return fetchHelper({
//       url: 'user/login',
//       body: JSON.stringify({ userName: username, secret: password }),
//       method: 'POST',
//     })
//       .then((user) => {
//         if (!user) {
//           throw new Error('Invalid Login');
//         }
  
//         return saveUserToLocalStorage(user);
//       });
//   };
  
//   export const register = (username, password) => {
//     return fetchHelper({
//       url: 'user/register',
//       body: JSON.stringify({
//         userName: username,
//         fullName: username,
//         secret: password,
//       }),
//       method: 'POST',
//     });
//   };

//TODO: This should require a user_id JWT
export const exchangePublicToken = (publicToken) => {
    return fetchHelper({
      url: 'exchange_plaid_public_token',
      body: JSON.stringify(publicToken),
      method: 'POST'
    });
  };
