import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Message from "../../components/chat/Message";

const meta = {
    title: "ChatComponent/Message",
    component: Message,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        content: "This is message content",
        direction: "outgoing",
    },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Inbound: Story = {
    args: {
        content: "This is message content",
        direction: "inbound",
        senderName: "kang",
        sentAt: new Date(),
        unread: 2,
    },
};

export const LongInbound: Story = {
    args: {
        content:
            "This is message content This is message content This is message content",
        direction: "inbound",
        senderName: "강제욱",
        sentAt: new Date(),
        unread: 1,
    },
};

export const LongOutbound: Story = {
    args: {
        content:
            "This is message content This is message content This is message content",
        direction: "outgoing",
        sentAt: new Date(),
        unread: 1,
    },
};

export const WithoutUnread: Story = {
    args: {
        content: "short message",
        direction: "outgoing",
        sentAt: new Date(),
    },
};

export const WithoutTime: Story = {
    args: {
        content: "short message",
        direction: "outgoing",
        unread: 1,
    },
};

export const ImageContent: Story = {
    args: {
        contentType: "image",
        imageUrl:
            "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        direction: "outgoing",
        unread: 1,
        sentAt: new Date(),
    },
};

export const ImageContentInbound: Story = {
    args: {
        contentType: "image",
        imageUrl:
            "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        direction: "inbound",
        senderName: "강제욱",
        unread: 1,
        sentAt: new Date(),
    },
};
