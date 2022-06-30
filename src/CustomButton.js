import React from 'react';
import Button from '@mui/material/Button';

export function CustomButton({
  onClick,
  children,
  color = 'magenta',
  border = 'orange solid 2px',
  margin = '10px',
  variant = 'contained'
}) {
  return (
    <Button
      className='custom-button'
      onClick={onClick}
      variant={variant}
      sx={{
        background: color,
        border: border,
        margin: margin
      }}>
      {children}
    </Button>
  );
}