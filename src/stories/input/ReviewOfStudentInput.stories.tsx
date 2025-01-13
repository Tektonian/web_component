import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";
import ReviewOfStudentInput, {
    StudentReviewAttributes,
} from "../../components/input/ReviewOfStudentInput";

export default {
    title: "inputs/ReviewOfStudentInput",
    component: ReviewOfStudentInput,
} as Meta;

const Template: StoryFn = (args) => {
    const { control, handleSubmit } = useForm<StudentReviewAttributes>();

    const onSubmit = (data: StudentReviewAttributes) => {
        console.log("Submitted Data:", data);
    };

    const onCancel = () => {
        console.log("Canceled");
    };

    return (
        <ReviewOfStudentInput
            control={control}
            onSubmit={handleSubmit(onSubmit)}
            onCancel={onCancel}
        />
    );
};

export const Default = Template.bind({});
