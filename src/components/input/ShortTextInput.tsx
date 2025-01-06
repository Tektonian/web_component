import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { Controller, Control } from "react-hook-form";

export interface ShortTextInputProps {
    control: Control<any>;
    name: string;
    label?: string;
    defaultValue?: string;
    sx?: object;
}

const ShortTextInput: React.FC<ShortTextInputProps> = ({
    control,
    name,
    label,
    defaultValue,
    sx,
}) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <TextField
                {...field}
                label={label}
                fullWidth
                variant="outlined"
                defaultValue={defaultValue}
                sx={sx}
            />
        )}
    />
);

export default ShortTextInput;
