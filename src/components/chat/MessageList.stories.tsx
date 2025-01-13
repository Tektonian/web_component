import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import MessageList from "./MessageList";

export default {
    title: "Components/MessageList",
    component: MessageList,
} as Meta;

// @ts-ignore: MessageList is only for demo. we dont' use it
const Template: StoryFn = (args) => <MessageList {...args} />;

export const Default = Template.bind({});
Default.args = {};
