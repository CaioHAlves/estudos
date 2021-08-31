import React from 'react';
import Fab from '@material-ui/core/Fab';

type Props = {
  label: string;
  select: boolean;
  onClick?: () => void;
}

export function ChipFlutuante({label, select, onClick}: Props) {
  return (
    <Fab
      variant="extended"
      size="small"
      color={select === true ? 'primary' : 'secondary'}
      onClick={onClick}
      className="Chip-Flutuante"
    >
      {label}
    </Fab>
  )
}

export default ChipFlutuante
