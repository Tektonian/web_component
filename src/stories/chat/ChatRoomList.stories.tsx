import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ChatRoomList from "../../components/chat/ChatRoomList";

const meta = {
    title: "ChatComponent/ChatRoomList",
    component: ChatRoomList,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {},
} satisfies Meta<typeof ChatRoomList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
