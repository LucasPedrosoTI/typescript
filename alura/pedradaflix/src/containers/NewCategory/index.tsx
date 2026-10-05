import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { PageDefault, LoadingPageDefault } from '../PageDefault';
import ButtonLink from '../../components/ButtonLink';
import FormField from '../../components/FormField';

import useForm from '../../hooks/useForm';

import { Category } from '../../services/category';
import { ICategory } from '../../types/types';
import { useQuery } from '../../hooks/useQuery';

const defaultValues = {
  titulo: '',
  description: '',
  cor: '#ffffff',
};

const NewCategory = () => {
  const { values, setValue } = useForm(defaultValues);
  const [categories, setCategories] = useState<ICategory[]>([] as ICategory[]);
  const query = useQuery();
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      values.titulo?.length === 0 ||
      values.description?.length === 0 ||
      values.cor?.length === 0
    ) {
      return alert('Todos os campos são obrigatórios');
    }

    Category.createCategory({
      titulo: values.titulo,
      cor: values.cor,
      link_extra: { text: values.description, url: 'http://github.com/' },
    })
      .then(() => {
        alert('Sucesso');
        history.push('/');
      })
      .catch((err) => console.error(err));
  };

  const fetchCategories = useCallback(() => {
    Category.getCategories().then((res: ICategory[]) =>
      setCategories([...res])
    );
  }, []);

  const updateValue = useCallback(() => {
    if (query.get('titulo') !== null) {
      setValue('titulo', query.get('titulo')!);
    }
  }, [query, setValue]);

  useEffect(() => {
    fetchCategories();
    updateValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchCategories]);

  if (!categories || categories.length === 0) {
    return (
      <LoadingPageDefault buttonContent="&#8249;" buttonLink="/new/video" />
    );
  }

  return (
    <PageDefault buttonContent="&#8249;" buttonLink="/new/video">
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria: "
          value={values.titulo!}
          onChange={setValue}
          name="titulo"
        />

        <FormField
          label="Descrição: "
          value={values.description!}
          onChange={setValue}
          name="description"
          type="textarea"
        />

        <FormField
          label="Cor: "
          value={values.cor!}
          onChange={setValue}
          type="color"
          name="cor"
        />

        <div>
          <ButtonLink type="submit" className="button_link">
            Cadastrar
          </ButtonLink>
        </div>
      </form>

      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.titulo}</li>
        ))}
      </ul>
    </PageDefault>
  );
};

export default NewCategory;
