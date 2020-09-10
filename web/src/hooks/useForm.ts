import { useState } from 'react';

interface DefaultValues {
  email: string;
  password: string;
  rememberMe: boolean;
  showPassword: boolean;
}

export default (defaultValues: DefaultValues) => {
  const [values, setValues] = useState(defaultValues);

  const setValue = <T>(key: string, value: T) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  return { values, setValue };
};
