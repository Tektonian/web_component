import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";
import StudentProfileInput from "../../components/student/StudentCards/StudentProfileInput";
import type { StudentProfileData } from "../../components/student/StudentCards/StudentCardContent/StudentCard.types";
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
            name_glb: { KR: "John" },
            nationality: "KO",
            birth_date: "2000-05-15",
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
            control={control}
            {...{
                name_glb: { KO: "John" },
                nationality: "KO",
                birth_date: "2000-05-15",
                phone_number: "123-456-7890",
                emergency_contact: "987-654-3210",
                gender: 1,
                image: "https://via.placeholder.com/160",
                has_car: 1,
                keyword_list: ["자유", "평등", "박애"],
            }}
        />
    );
};

export const Default = Template.bind({});
