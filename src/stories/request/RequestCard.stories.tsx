import React from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import RequestCard, {
    RequestCardProps,
} from "../../components/request/RequestCard";

const meta: Meta<typeof RequestCard> = {
    title: "request/RequestCard",
    component: RequestCard,
    tags: ["autodocs"],
    argTypes: {
        title: { control: "text" },
        reward_price: { control: "number" },
        currency: { control: "text" },
        address: { control: "text" },
        start_date: { control: "text" },
        logo_image: { control: "text" },
    },
};

export default meta;

const Template: StoryFn<RequestCardProps> = (args) => <RequestCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "TOPIK 시험감독관 및 관리요원 모집",
    reward_price: 20000,
    currency: "JP",
    address: "사이타마현 슈쿠토쿠요노 고등학교",
    start_date: new Date().toString(),
};

export const WithLogo: StoryObj = {
    args: {
        title: "TOPIK 시험감독관 및 관리요원 모집",
        reward_price: 20000,
        currency: "JP",
        address: "사이타마현 슈쿠토쿠요노 고등학교",
        start_date: new Date().toString(),
        logo_image:
            "https://upload.wikimedia.org/wikipedia/commons/1/19/Vulfpeck_Logo.jpg",
    },
};

export const Growing: StoryObj = {
    args: {
        title: "TOPIK 시험감독관 및 관리요원 모집",
        reward_price: 20000,
        currency: "JP",
        address: "사이타마현 슈쿠토쿠요노 고등학교",
        start_date: new Date().toString(),
        request_status: 3,
        logo_image:
            "https://upload.wikimedia.org/wikipedia/commons/1/19/Vulfpeck_Logo.jpg",
    },
};

export const LongText: StoryObj = {
    args: {
        title: "TOPIK 시험감독관 및 관리요원 모집,TOPIK 시험감독관 및 관리요원 모집,TOPIK 시험감독관 및 관리요원 모집",
        reward_price: 20000,
        currency: "JP",
        address: "사이타마현 슈쿠토쿠요노 고등학교",
        start_date: new Date().toString(),
        request_status: 3,
        logo_image:
            "https://upload.wikimedia.org/wikipedia/commons/1/19/Vulfpeck_Logo.jpg",
    },
};
