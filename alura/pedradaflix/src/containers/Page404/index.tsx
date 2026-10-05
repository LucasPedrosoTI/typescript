import React from 'react';

import { PageDefault } from '../PageDefault';
import { Page404Base, SadFace, Frame } from './styles';

const Page404 = ({ error = 'Página não existe!' }: any) => {
  return (
    <PageDefault buttonContent={'Novo vídeo'} buttonLink="/create/video">
      <Page404Base>
        <div>
          <SadFace>
            <span role="img" aria-label="sad-face">
              🙁
            </span>
          </SadFace>
          <span>{error}</span>
        </div>

        <iframe
          src="https://lucas-game.netlify.app/"
          title="game"
          style={Frame}
        />
      </Page404Base>
    </PageDefault>
  );
};

export default Page404;
