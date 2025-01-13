import React, { useEffect } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";
import {
    CountrySelect,
    CountrySelectProps,
} from "../../components/input/CountrySelect";

const meta: Meta<typeof CountrySelect> = {
    title: "inputs/CountrySelect",
    component: CountrySelect,
    tags: ["autodocs"],
    argTypes: {
        stdNationality: { type: "string" },
    },
};

export default meta;

const Template: StoryFn<CountrySelectProps> = (args) => {
    const { control } = useForm<any>({});
    useEffect(() => {
        console.log(control._formValues);
    }, [control._formValues]);
    return <CountrySelect control={control} name="country_code" />;
};

export const Default = Template.bind({});
