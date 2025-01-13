import React from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import StudentProfileCard from "../../components/student/StudentCards/StudentProfileCard";
import type { StudentMyPageProfileData } from "../../components/student/StudentCards/StudentCardContent/StudentCard.types";

const meta: Meta<typeof StudentProfileCard> = {
    title: "student/StudentProfileCard",
    component: StudentProfileCard,
    tags: ["autodocs"],
    argTypes: {
        nationality: { control: "text" },
        birth_date: { control: "text" },
        phone_number: { control: "text" },
        emergency_contact: { control: "text" },
        gender: { control: "text" },
        image: { control: "text" },
        has_car: { control: "number" },
        isMyPage: { control: "boolean" },
    },
};

export default meta;

const Template: StoryFn<StudentMyPageProfileData> = (args) => (
    <StudentProfileCard {...args} />
);

export const Default: StoryObj<StudentMyPageProfileData> = Template.bind({});
Default.args = {
    name_glb: { KR: "김철수" },
    nationality: "KO",
    birth_date: "1999-01-01",
    gender: 0,
    phone_number: "010-1234-5678",
    emergency_contact: "010-8765-4321",
    image: "https://picsum.photos/150",
    keyword_list: ["자유", "평등", "박애"],
    has_car: 1,
};

export const MyPageView: StoryObj<StudentMyPageProfileData> = Template.bind({});
MyPageView.args = {
    name_glb: { KR: "박지성" },
    nationality: "KO",
    birth_date: "1999-11-11",
    gender: 0,
    phone_number: "010-1234-5678",
    emergency_contact: "010-8765-4321",
    image: "https://picsum.photos/150",
    has_car: 1,
    keyword_list: ["자유", "평등", "박애"],
};
