import React from "react";
import { Controller } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3/index.js";

export interface DateInputProps {
    control: any;
    name: string;
    label?: string;
    defaultValue?: string;
    sx?: object;
}

const DateInput: React.FC<DateInputProps> = ({
    control,
    name,
    label,
    defaultValue,
    sx,
}) => (
    <Controller
        name={name}
        control={control}
        defaultValue={dayjs(defaultValue)}
        render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    {...field}
                    label={label}
                    onChange={(date) => {
                        field.onChange(date);
                    }}
                    value={new Date(field.value)}
                    sx={sx}
                />
            </LocalizationProvider>
        )}
    />
);

export default DateInput;
