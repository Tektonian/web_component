import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AcademicHistoryCard, {
    AcademicHistoryCardProps,
} from "../../components/student/AcademicHistoryCard";

const meta: Meta<typeof AcademicHistoryCard> = {
    title: "student/AcademicHistoryCard",
    component: AcademicHistoryCard,
    args: {
        degree: "Bachelor of Science",
        faculty: "Computer Science",
        school_name: "Stanford University",
        start_date: "2018-09-01",
        end_date: "2022-06-15",
        status: "Graduated",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Seal_of_Leland_Stanford_Junior_University.svg",
    },
};

export default meta;
type Story = StoryObj<AcademicHistoryCardProps>;

export const Default: Story = {};
