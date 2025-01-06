import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import MessageHeader, { MessageHeaderProps } from "./MessageHeader";

export default {
    title: "Components/MessageHeader",
    component: MessageHeader,
    argTypes: {
        onClickArrow: { action: "navigate back clicked" },
        onClickUser: { action: "username clicked" },
    },
} as Meta;

const Template: StoryFn<MessageHeaderProps> = (args) => (
    <MessageHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
    username: "John Doe",
};
