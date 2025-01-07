import React from "react";
import { CardContent, Grid2 as Grid } from "@mui/material";
import ShortTextInput from "../../input/ShortTextInput";
import { CountrySelect } from "../../input/CountrySelect";
import type { MyProfileCardData } from "./MyProfileCard.types";
import type { Control } from "react-hook-form";

interface MyProfileInputCardContentProps extends MyProfileCardData {
    control: Control<MyProfileCardData>;
}
const MyProfileInputCardContent = ({
    name,
    image,
    location,
    nationality,
    workingCountry,
    control,
}: MyProfileInputCardContentProps) => {
    return (
        <CardContent>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <ShortTextInput
                        name={"username"}
                        defaultValue={name}
                        control={control}
                    />
                </Grid>
                <Grid
                    size={6}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                    <CountrySelect
                        name="nationality"
                        defaultCountry={nationality}
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
                        name="workingCountry"
                        defaultCountry={workingCountry}
                        control={control}
                    />
                </Grid>
            </Grid>
        </CardContent>
    );
};

export default MyProfileInputCardContent;
