import { categories } from './api';

export const Category = {
  async getCategories() {
    try {
      const { data } = await categories.get('/');

      return data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getCategoriesWithVideos() {
    try {
      const { data } = await categories.get('?_embed=videos');
      if (data[0].videos.length === 0) throw new Error('Cannot get videos');
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async createCategory(data: any) {
    try {
      categories.post('/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  },
};
