import { auth } from './gestao_api';

export const Auth = {
  async signin(data: { email: string; password: string }) {
    const response = await auth.post('/signin', data, {
      headers: { 'Content-Type': 'application/json' },
    });

    return response;
  },
};
