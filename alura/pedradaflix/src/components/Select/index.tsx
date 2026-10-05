import React from 'react';

interface Props {
  categories: Category[];
  keyIndex: number;
  defaultValue: string;
}

interface Category {
  [key: string]: any;
  titulo: string;
  cor: string;
  link_extra: {
    text: string;
    url: string;
  };
  videos: {
    titulo: string;
    url: string;
  }[];
}

const Select = ({ categories, keyIndex, defaultValue }: Props) => {
  return (
    <select name="category" id="category">
      <option selected defaultValue="">
        {defaultValue}
      </option>
      {categories.map((category: Category) => {
        const keys: string[] = Object.keys(categories[0]);
        const property: string = keys[keyIndex];

        return (
          <option key={category[property]} value={category[property]}>
            {category[property]}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
