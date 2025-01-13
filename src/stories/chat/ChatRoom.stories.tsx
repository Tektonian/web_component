import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ChatRoom from "../../components/chat/ChatRoom";

const meta = {
    title: "ChatComponent/ChatRoom",
    component: ChatRoom,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop",
        title: "Kang",
        lastMessage: "Hey",
        lastSentAt: new Date(),
        unreadCount: 2,
        onClick: fn(),
        onContextMenu: fn(),
    },
} satisfies Meta<typeof ChatRoom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithImage: Story = {
    args: {
        image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop",
        title: "Kang",
        lastMessage: "Hey",
        lastSentAt: new Date(),
        unreadCount: 2,
        onClick: fn(),
        onContextMenu: fn(),
    },
};

export const WithoutImage: Story = {
    args: {
        image: undefined,
        title: "Kang",
        lastMessage: "Hey",
        lastSentAt: new Date(),
        unreadCount: 2,
        onClick: fn(),
        onContextMenu: fn(),
    },
};

export const WithLongChat: Story = {
    args: {
        image: undefined,
        title: "Kang",
        lastMessage: "HHhhhhhhhhhhhhhhhhhhhhhhhhhhhey",
        lastSentAt: new Date(),
        unreadCount: 2,
        onClick: fn(),
        onContextMenu: fn(),
    },
};

export const NoUnreadCount: Story = {
    args: {
        image: undefined,
        title: "Kang",
        lastMessage: "HHhhhhhhhhhhhhhhhhhhhhhhhhhhhey",
        lastSentAt: new Date(),
        unreadCount: 0,
        onClick: fn(),
        onContextMenu: fn(),
    },
};
