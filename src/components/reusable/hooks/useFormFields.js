import { useState } from 'react';

export const useFormFields = (initialState = { data: {}, error: {}, validation: {} }) => {
  const [fields, setFields] = useState(initialState);

  const onChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name || event.target.id;
    const error =
      fields.validation && fields.validation[name] && typeof fields.validation[name] === 'function'
        ? fields.validation[name](value)
        : false;
    setFields({
      ...fields,
      data: { ...fields.data, [name]: value },
      error: { ...fields.error, [name]: error },
    });
  };
  const reset = (resetState) => {
    setFields(resetState || initialState);
  };

  return [fields, onChange, reset];
};
