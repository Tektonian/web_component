import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import StudentCard from "../../components/student/StudentCard";

const meta = {
    title: "student/StudentCard",
    component: StudentCard,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        name: "John Doe",
        nationality: "American",
        school: "Harvard University",
        major: "Computer Science",
        languageWithLevel: [
            { language: "English", level: 1 },
            { language: "Spanish", level: 2 },
        ],
        imageUrl:
            "https://i.namu.wiki/i/I1HFSsVj5145o1mz8jp3Y4MSRxL4ytFGvxfLx1r6ORLEhbTsrBcZ7Yx4TeUawBFFdFL4BL2Ktee4m4IyyN7JjV66G2NReiZv-1Zd0FS0juouF80im0yrUNcWK1Rr-jJ0xu19WjJeHxama_GwUz5ozR9qPSUG3O7ncIVjRPPfpwg.webp",
        onBookmarkClick: fn(),
    },
} satisfies Meta<typeof StudentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MultiLanguage: Story = {
    args: {
        name: "Jane Smith",
        nationality: "Canadian",
        school: "University of Toronto",
        major: "Physics",
        languageWithLevel: [
            { language: "French", level: 1 },
            { language: "Japaneses", level: 2 },
        ],
        imageUrl: "https://via.placeholder.com/120",
    },
};

export const DifferentMajor: Story = {
    args: {
        name: "Alice Kim",
        nationality: "South Korean",
        school: "Korea University",
        major: "International Relations",
        languageWithLevel: [
            { language: "Korean", level: 1 },
            { language: "English", level: 2 },
        ],
        imageUrl: "https://via.placeholder.com/120",
    },
};
