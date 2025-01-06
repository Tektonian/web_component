import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import MessageHeader from "../../components/chat/MessageHeader";

const meta = {
    title: "ChatComponent/MessageHeader",
    component: MessageHeader,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        onClickArrow: () => alert("test"),
        username: "User name",
    },
} satisfies Meta<typeof MessageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
