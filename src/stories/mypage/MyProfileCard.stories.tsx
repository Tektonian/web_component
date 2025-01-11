import React from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import MyProfileCard, {
    MyProfileCardProps,
} from "../../components/mypage/MyProfileCard";

const meta: Meta<typeof MyProfileCard> = {
    title: "mypage/MyProfileCard",
    component: MyProfileCard,
    argTypes: {
        name: { type: "string" },
        image: { type: "string" },
        location: { type: "string" },
        nationality: { type: "string" },
        workingCountry: { type: "string" },
    },
};

export default meta;

type Story = StoryObj<MyProfileCardProps>;

export const Default: Story = {
    args: {
        name: "강제욱",
        image: "https://picsum.photos/200",
        location: "서울",
        nationality: "KO",
        workingCountry: "JP",
    },
};

export const WithOutImage: Story = {
    args: {
        name: "Kang",
        location: "서울",
        nationality: "KO",
        workingCountry: "JP",
    },
};
