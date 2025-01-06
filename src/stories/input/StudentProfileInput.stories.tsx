import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";
import StudentProfileInput, {
    StudentProfileData,
} from "../../components/input/StudentProfileInput";

const meta: Meta<typeof StudentProfileInput> = {
    title: "inputs/StudentProfileInput",
    component: StudentProfileInput,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

const Template: StoryFn = () => {
    const { control } = useForm<StudentProfileData>({
        defaultValues: {
            student_name: "John Doe",
            nationality: "USA",
            birth_date: new Date("2000-05-15"),
            phone_number: "123-456-7890",
            emergency_contact: "987-654-3210",
            gender: 1,
            image: "https://via.placeholder.com/160",
            has_car: 1,
            keyword_list: ["자유", "평등", "박애"],
        },
    });

    return (
        <StudentProfileInput
            initialData={{
                student_name: "John Doe",
                nationality: "USA",
                birth_date: new Date("2000-05-15"),
                phone_number: "123-456-7890",
                emergency_contact: "987-654-3210",
                gender: 1,
                image: "https://via.placeholder.com/160",
                has_car: 1,
                keyword_list: ["자유", "평등", "박애"],
            }}
            control={control}
        />
    );
};

export const Default = Template.bind({});
