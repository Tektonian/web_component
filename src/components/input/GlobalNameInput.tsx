import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextField, Grid2 as Grid, MenuItem } from "@mui/material";
import { CountrySelect } from "./CountrySelect";
interface GlobalNameInputProps {
    control: Control<any>;
    name: string;
    availableLanguages?: string[];
    defaultValue?: { [countryCode: string]: string };
}

const GlobalNameInput: React.FC<GlobalNameInputProps> = ({
    control,
    name,
    availableLanguages = ["KR", "US", "JP"],
    defaultValue,
}) => {
    return (
        <Grid container spacing={2}>
            {availableLanguages.map((val, idx) => (
                <Grid size={12} key={idx}>
                    <Grid container spacing={2}>
                        <Grid size={3}>
                            <CountrySelect
                                disabled
                                defaultCountry={val.toUpperCase()}
                                stdNationality="KR" // TODO: add user nationality information alter
                                control={control}
                                name={""}
                            />
                        </Grid>
                        <Grid size={9}>
                            <Controller
                                name={`${name}[${val}]`}
                                control={control}
                                defaultValue={defaultValue?.[val] ?? ""}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label={`Name ${idx + 1}`}
                                        fullWidth
                                        variant="outlined"
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
};

export default GlobalNameInput;
