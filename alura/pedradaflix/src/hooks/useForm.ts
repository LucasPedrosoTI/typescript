import { useState } from 'react';

interface defaultValues {
  titulo?: string;
  description?: string;
  cor?: string;
  url?: string;
  categoria?: string;
}

export default (defaultValues: defaultValues) => {
  const [values, setValues] = useState(defaultValues);

  const setValue = (key: string, value: string) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  return { values, setValue };
};
