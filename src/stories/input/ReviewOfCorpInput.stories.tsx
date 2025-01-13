import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";
import ReviewOfCorpInput, {
    ReviewOfCorpProps,
} from "../../components/input/ReviewOfCorpInput";

export default {
    title: "inputs/ReviewOfCorpInput",
    component: ReviewOfCorpInput,
} as Meta;

const Template: StoryFn = (args) => {
    const { control, handleSubmit } = useForm<ReviewOfCorpProps>();

    const onSubmit = (data: ReviewOfCorpProps) => {
        console.log("Submitted Data:", data);
    };

    const onCancel = () => {
        console.log("Canceled");
    };

    return (
        <ReviewOfCorpInput
            control={control}
            onSubmit={handleSubmit(onSubmit)}
            onCancel={onCancel}
        />
    );
};

export const Default = Template.bind({});
