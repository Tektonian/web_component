import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CorpProfileCard, {
    CorpProfileCardProps,
} from "../../components/corporation/CorpProfileCard";

const meta: Meta<typeof CorpProfileCard> = {
    title: "corporation/CorpProfileCard",
    component: CorpProfileCard,
    argTypes: {
        corp_name: { control: "text" },
        nationality: { control: "text" },
        ceo_name: { control: "text" },
        corp_address: { control: "text" },
        biz_started_at: { control: "text" },
        biz_type: { control: "text" },
        logo_image: { control: "text" },
        site_url: { control: "text" },
        isMypage: { controle: "boolean" },
    },
};

export default meta;

const Template: StoryFn<CorpProfileCardProps> = (args) => (
    <CorpProfileCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    corp_name: "Vulfpeck",
    nationality: "미국",
    ceo_name: "Joe Dart",
    corp_address: "미시간 대학교",
    biz_started_at: "2011",
    biz_type: "Funky Jazz",
    logo_image:
        "https://upload.wikimedia.org/wikipedia/commons/1/19/Vulfpeck_Logo.jpg",
    site_url: "https://www.vulfpeck.com/",
    isMypage: true,
};
