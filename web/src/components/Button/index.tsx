import React, { ReactNode } from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

interface ButtonProps {
  color?: string;
  to: string;
  children: ReactNode;
}

const ButtonLink: React.FC<ButtonProps> = ({
  color = 'primary',
  to,
  children,
}) => {
  return (
    <Link to={to} className={`btn btn_${color}`} type="button">
      {children}
    </Link>
  );
};

export default ButtonLink;
