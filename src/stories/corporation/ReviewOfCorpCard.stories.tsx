import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ReviewOfCorpCard, {
    ReviewOfCorpCardProps,
} from "../../components/corporation/ReviewOfCorpCard";

const meta: Meta<typeof ReviewOfCorpCard> = {
    title: "corporation/ReviewOfCorpCard",
    component: ReviewOfCorpCard,
    argTypes: {
        review_text: { control: "text" },
        prep_requirement: { control: "text" },
        work_atmosphere: { control: "text" },
        sense_of_achive: { control: { type: "range", min: 0, max: 10 } },
    },
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};

export default meta;

export const Default: StoryFn<ReviewOfCorpCardProps> = (args) => (
    <ReviewOfCorpCard {...args} />
);

Default.args = {
    review_text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    prep_requirement: "Basic knowledge of React and TypeScript.",
    work_atmosphere: "Friendly and collaborative",
    sense_of_achive: 8,
};
