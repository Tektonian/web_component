import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { Controller, Control } from "react-hook-form";
import type { FieldValues, FieldPath, FieldPathValue } from "react-hook-form";
export interface ShortTextInputProps<F extends FieldValues> {
    control?: Control<F>;
    name: FieldPath<F>;
    label?: string;
    defaultValue?: FieldPathValue<F, FieldPath<F>>;
    sx?: object;
}

const ShortTextInput = <F extends FieldValues>({
    control,
    name,
    label,
    defaultValue,
    sx,
}: ShortTextInputProps<F>) => (
    <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
            <TextField
                {...field}
                value={field.value}
                label={label}
                fullWidth
                variant="outlined"
                sx={sx}
            />
        )}
    />
);

export default ShortTextInput;
