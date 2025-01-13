import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import MessageList from "../../components/chat/MessageList";

const meta = {
    title: "ChatComponent/MessageList",
    component: MessageList,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {},
} satisfies Meta<typeof MessageList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
