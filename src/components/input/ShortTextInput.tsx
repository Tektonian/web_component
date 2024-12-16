import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export interface ShortTextInputProps {
  control: any;
  name: string;
  label: string;
}

const ShortTextInput: React.FC<ShortTextInputProps> = ({ control, name, label }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <TextField {...field} label={label} fullWidth variant="outlined" />
    )}
  />
);

export default ShortTextInput;