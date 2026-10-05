import { videos } from './api';

export const Video = {
  async createVideo(data: any) {
    try {
      videos.post('/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  },
};
