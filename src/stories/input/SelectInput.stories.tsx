import React, { useEffect } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Container } from "@mui/material";
import SelectInput, {
    SelectInputProps,
} from "../../components/input/SelectInput";

const meta: Meta<typeof SelectInput> = {
    title: "inputs/SelectInput",
    component: SelectInput,
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;

const Template: StoryFn<SelectInputProps<{ demoName: number }>> = (args) => {
    const { control, watch } = useForm<{ demoName: number }>({
        defaultValues: { demoName: 0 },
    });

    useEffect(() => {
        console.log(control._formValues, watch);
        const subscription = watch((value, { name, type }) =>
            console.log(value, name, type),
        );
        return () => subscription.unsubscribe();
    }, [watch, control]);
    return (
        <Container>
            <SelectInput
                name="demoName"
                options={[
                    { value: 0, label: "abc" },
                    { value: 1, label: "you" },
                    { value: 2, label: "can" },
                ]}
                control={control}
            />
        </Container>
    );
};

export const Default = Template.bind({});
