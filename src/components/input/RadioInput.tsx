import React from "react";
import { Controller, Control } from "react-hook-form";
import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
} from "@mui/material";

export interface RadioOption {
    value: string | number;
    label: string;
}

export interface RadioInputProps {
    control: Control<any>;
    name: string;
    label?: string;
    options: RadioOption[];
    defaultValue?: string | number;
    sx?: object;
}

const RadioInput: React.FC<RadioInputProps> = ({
    control,
    name,
    label,
    options,
    defaultValue,
    sx,
}) => (
    <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
            <FormControl sx={sx}>
                {label && (
                    <FormLabel id={`${name}-radio-group-label`}>
                        {label}
                    </FormLabel>
                )}
                <RadioGroup {...field} defaultValue={defaultValue} row>
                    {options.map((option) => (
                        <FormControlLabel
                            key={option.value}
                            value={option.value}
                            control={<Radio />}
                            label={option.label}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        )}
    />
);

export default RadioInput;
