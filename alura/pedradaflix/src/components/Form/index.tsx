import React from 'react';

import { FormContainer, StyledSelect } from './styles';

import Select from '../Select';

import { categorias as categories } from '../../data/dados_iniciais.json';

const Form = () => {
  return (
    <>
      <FormContainer>
        <input type="text" name="title" id="title" value="" />
        <StyledSelect
          defaultValue="Escolha uma categoria"
          categories={categories}
          keyIndex={0}
        />
        <Select
          defaultValue="Escolha uma cor"
          categories={categories}
          keyIndex={1}
        />

        <textarea
          name="description"
          id="description"
          cols={30}
          rows={5}
        ></textarea>
      </FormContainer>
    </>
  );
};

export default Form;
