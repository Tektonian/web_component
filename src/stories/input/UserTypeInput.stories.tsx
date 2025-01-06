import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";
import UserTypeInput, {
    UserTypeInputProps,
} from "../../components/input/UserTypeInput";

export default {
    title: "inputs/UserTypeInput",
    component: UserTypeInput,
} as Meta;

const Template: StoryFn = (args) => {
    const { control, handleSubmit } = useForm<UserTypeInputProps>();

    const onSubmit = (data: UserTypeInputProps) => {
        console.log("Submitted Data:", data);
    };

    return <UserTypeInput control={control} onNext={handleSubmit(onSubmit)} />;
};

export const Default = Template.bind({});
