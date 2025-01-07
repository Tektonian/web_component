import * as React from "react";
import { Box, TextField, Autocomplete } from "@mui/material";
import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";

type CountryCode = string;

export interface CountrySelectProps {
    name: string;
    control: Control;
    disabled?: boolean;
    stdNationality?: string;
    defaultCountry?: string;
}

export const CountrySelect = ({
    name,
    control,
    disabled = false,
    stdNationality = "KR",
    defaultCountry = "KR",
}: CountrySelectProps) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultCountry}
            render={({ field: { onChange, onBlur, value, ref } }) => (
                <Autocomplete
                    disabled={disabled}
                    id={name}
                    onChange={(event, selectedValue) => {
                        console.log(selectedValue);
                        onChange(selectedValue?.code);
                    }}
                    onBlur={onBlur}
                    value={countries.find((val) => val.code === value)}
                    sx={{ width: "100%" }}
                    options={countries}
                    autoHighlight
                    filterSelectedOptions
                    getOptionLabel={(option) => {
                        console.log(option?.name);
                        console.log(control);
                        return option?.name?.[stdNationality];
                    }}
                    renderOption={(props, option) => {
                        const { key, ...optionProps } = props;
                        return (
                            <Box
                                key={key}
                                component="li"
                                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                                {...optionProps}
                            >
                                <img
                                    loading="lazy"
                                    width="20"
                                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                    alt=""
                                />

                                {option.name?.[stdNationality] ??
                                    option.name[option.code]}
                            </Box>
                        );
                    }}
                    renderInput={(params) => (
                        <TextField
                            label="Choose a country"
                            {...params}
                            slotProps={{
                                htmlInput: {
                                    ...params.inputProps,
                                    autoComplete: "new-password", // disable autocomplete and autofill
                                },
                            }}
                        />
                    )}
                />
            )}
        />
    );
};
interface CountryType {
    code: string;
    name: {
        [countryCode: string]: string;
    };
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries: readonly CountryType[] = [
    {
        code: "KR",
        name: { KR: "대한민국", US: "South Korea", JP: "韓国" },
    },
    { code: "JP", name: { KR: "일본", US: "Japan", JP: "日本" } },
    {
        code: "US",
        name: { KR: "미국", US: "USA", JP: "アメリカ" },
    },
];

interface RefCountryType {
    [countryName: string]: string;
}
const revCountries: RefCountryType = {
    대한민국: "KR",
    "South Korea": "KR",
    韓国: "KR",
    일본: "JP",
    Japan: "JP",
    日本: "JP",
    미국: "US",
    USA: "US",
    アメリカ: "US",
};
