import React, { useEffect, useState, useCallback } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import { PageDefault, LoadingPageDefault } from '../PageDefault';
import { Category } from '../../services/category';
import { ICategoryEmbedVideos } from '../../types/types';
import Page404 from '../Page404';

const Home = () => {
  const [error, setError] = useState('');
  const [categories, setCategories] = useState<ICategoryEmbedVideos[]>(
    [] as ICategoryEmbedVideos[]
  );

  const fetchCategories = useCallback(() => {
    Category.getCategoriesWithVideos()
      .then((result: ICategoryEmbedVideos[]) => {
        setCategories([...result]);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    fetchCategories();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchCategories]);

  if (error) {
    return <Page404 error={error} />;
  }

  if (categories.length === 0) {
    return (
      <LoadingPageDefault
        buttonContent={'Novo vídeo'}
        buttonLink="/new/video"
      />
    );
  }

  return (
    <>
      <PageDefault
        paddingAll={0}
        buttonContent={'Novo vídeo'}
        buttonLink="/new/video"
      >
        {categories.map((category, index) => {
          if (index === 0) {
            return (
              <div key={category.id}>
                <BannerMain
                  videoTitle={categories[0].videos[0].titulo!}
                  url={categories[0].videos[0].url}
                  videoDescription={categories[0].videos[0].titulo}
                />
                <Carousel ignoreFirstVideo category={categories[0]} />
              </div>
            );
          }

          return <Carousel key={category.id} category={category} />;
        })}
      </PageDefault>
    </>
  );
};

export default Home;
