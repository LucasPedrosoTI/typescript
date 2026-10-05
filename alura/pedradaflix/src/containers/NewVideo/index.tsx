import React, { useState, useEffect } from 'react';
import { PageDefault } from '../PageDefault';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../components/FormField';
import useForm from '../../hooks/useForm';
import ButtonLink from '../../components/ButtonLink';

import { Video } from '../../services/videos';
import { Category } from '../../services/category';
import { ICategory } from '../../types/types';

const defaultValues = {
  titulo: '',
  url: '',
  categoria: '',
};

const NewVideo = () => {
  const { values, setValue } = useForm(defaultValues);
  const [categories, setCategories] = useState<ICategory[]>([] as ICategory[]);
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      values.titulo?.length === 0 ||
      values.categoria?.length === 0 ||
      values.url?.length === 0
    )
      return alert('Todos os campos são obrigatórios');

    const foundCategory = categories.find((category: ICategory) => {
      return (
        category.titulo.toLowerCase().trim() ===
        values?.categoria?.toLowerCase().trim()
      );
    });

    if (!foundCategory) {
      const createNewCategory = window.confirm(
        'Categoria não encontrada. Deseja criar uma nova?'
      );

      if (!createNewCategory) return;

      return history.push(`/new/category?titulo=${values.categoria}`);
    }

    Video.createVideo({
      titulo: values.titulo,
      url: values.url,
      categoriaId: foundCategory?.id,
    })
      .then(() => {
        alert('Sucesso');
        history.push('/');
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    Category.getCategories()
      .then((res: ICategory[]) => setCategories([...res]))
      .catch((error) => {
        alert(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageDefault buttonContent="&#8249;" buttonLink="/">
      <h1>Cadastro de Video</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Titulo do Video: "
          value={values.titulo!}
          onChange={setValue}
          name="titulo"
        />

        <FormField
          label="URL: "
          value={values.url!}
          onChange={setValue}
          name="url"
        />

        <FormField
          label="Categoria: "
          value={values.categoria!}
          onChange={setValue}
          name="categoria"
          suggestions={categories.map(({ titulo }) => titulo)}
        />

        <div>
          <ButtonLink type="submit" className="button_link">
            Cadastrar
          </ButtonLink>
        </div>
      </form>

      <Link to="/new/category">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default NewVideo;
