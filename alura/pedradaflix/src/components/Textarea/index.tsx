import React from "react";

interface TAreaProps {
  value: string;
  label: string;
  onChange: Function;
  name: string;
}

const Textarea = ({ value, label, onChange, name }: TAreaProps) => {
  const handleOnChange = (inputKey: string | null, value: string) => {
    if (inputKey === null) {
      return onChange(value);
    } else {
      return onChange(inputKey, value);
    }
  };

  return (
    <div>
      <label>
        {label}
        <textarea
          name={name}
          value={value}
          onChange={({ target }) =>
            handleOnChange(target.getAttribute("name"), target.value)
          }
          placeholder={label}
        />
      </label>
    </div>
  );
};

export default Textarea;
