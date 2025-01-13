import React from "react";
import { Controller } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3/index.js";

export interface YearMonthInputProps {
    control: any;
    name: string;
    label: string;
}

const YearMonthInput: React.FC<YearMonthInputProps> = ({
    control,
    name,
    label,
}) => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <DatePicker
                    {...field}
                    label={label}
                    views={["year", "month"]}
                    onChange={(date) => field.onChange(date)}
                    value={field.value}
                    slotProps={{
                        textField: { fullWidth: true },
                    }}
                />
            )}
        />
    </LocalizationProvider>
);

export default YearMonthInput;
