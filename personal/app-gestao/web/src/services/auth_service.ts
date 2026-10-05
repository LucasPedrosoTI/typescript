import { auth } from './gestao_api';

export const Auth = {
  async signin(data: { email: string; password: string }) {
    try {
      const response = await auth.post('/signin', data, {
        headers: { 'Content-Type': 'application/json' },
      });

      return response;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  },
};
