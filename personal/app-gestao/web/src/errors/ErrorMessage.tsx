import React, { FC } from 'react';
import { ErrorOutline } from '@material-ui/icons';

interface Props {
  errorMessage: string;
}

const ErrorMessage: FC<Props> = ({ errorMessage }) => {
  return (
    <div style={styles}>
      <p>
        <ErrorOutline />
        {'  ' + errorMessage}
      </p>
    </div>
  );
};

const styles = {
  backgroundColor: '#fafafa',
  opacity: 0.5,
  padding: '5px 10px',
  color: '#e63946',
  borderRadius: '10px',
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
};

export default ErrorMessage;
