import React from "react";
import { CardContent, Grid2 as Grid } from "@mui/material";
import ShortTextInput from "../../input/ShortTextInput";
import { CountrySelect } from "../../input/CountrySelect";
import type { Control } from "react-hook-form";
import type { APIType } from "@mesh/api_spec";

interface MyProfileInputCardContentProps extends APIType.UserType.UserData {
    control: Control<APIType.UserType.UserData>;
}
const MyProfileInputCardContent = ({
    username,
    image,
    location,
    nationality,
    working_country,
    control,
}: MyProfileInputCardContentProps) => {
    return (
        <CardContent>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <ShortTextInput
                        name={"username"}
                        defaultValue={username}
                        control={control}
                    />
                </Grid>
                <Grid
                    size={6}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                    <CountrySelect
                        name="nationality"
                        // TODO: add global later
                        // @ts-ignore
                        defaultCountry={nationality}
                        // @ts-ignore
                        control={control}
                    />
                </Grid>
                <Grid size={6}>
                    <ShortTextInput
                        name={"location"}
                        defaultValue={location}
                        control={control}
                    />
                </Grid>
                <Grid
                    size={6}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                    <CountrySelect
                        name="working_country"
                        // TODO: Add global later
                        // @ts-ignore
                        defaultCountry={working_country}
                        // @ts-ignore
                        control={control}
                    />
                </Grid>
            </Grid>
        </CardContent>
    );
};

export default MyProfileInputCardContent;
