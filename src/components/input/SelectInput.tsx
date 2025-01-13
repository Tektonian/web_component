import React from "react";
import { Controller } from "react-hook-form";
import { TextField, MenuItem } from "@mui/material";
import type {
    Control,
    FieldValues,
    FieldPath,
    FieldValue,
    PathValue,
    FieldName,
} from "react-hook-form";

interface ItemProps<V extends FieldValues> {
    value: FieldValue<V>;
    label: string;
}

export interface SelectInputProps<V extends FieldValues> {
    control: Control<V>;
    name: FieldPath<V>;
    options: ItemProps<V>[];
}

const SelectInput = <F extends FieldValues>({
    control,
    name,
    options,
}: SelectInputProps<F>) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <TextField {...field} select fullWidth variant="outlined">
                {options.map((option, idx) => (
                    <MenuItem key={idx} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        )}
    />
);

export default SelectInput;
