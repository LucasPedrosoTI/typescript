import React, { ReactNode } from 'react';

interface ButtonProps {
  className: string;
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button';
}

const ButtonLink = ({
  className = '',
  children,
  type = 'button',
}: ButtonProps) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default ButtonLink;
