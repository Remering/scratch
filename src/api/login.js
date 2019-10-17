import api from './index';

export default {

  login: async (username, password) =>
    api.post('/user/login',
      {
        username,
        password,
      },
    ),

};