import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import ChatRoomList from "./ChatRoomList";

export default {
    title: "Components/ChatRoomList",
    component: ChatRoomList,
} as Meta;

const Template: StoryFn = (args) => {
    const [selectedRooms, setSelectedRooms] = useState<string[]>([]);

    const handleCheckboxToggle = (chatRoomId: string, checked: boolean) => {
        setSelectedRooms((prev) =>
            checked
                ? [...prev, chatRoomId]
                : prev.filter((id) => id !== chatRoomId),
        );
    };

    return (
        // @ts-ignore: ChatRoomList is only for demo. we don't use it
        <ChatRoomList
            {...args}
            selectedRooms={selectedRooms}
            handleCheckboxToggle={handleCheckboxToggle}
            handleClick={() => console.log(`Clicked`)}
            handleContextMenu={() => console.log(`Context menu`)}
            handleLongPress={() => console.log(`Long press`)}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    isCheckbox: false,
    chatRooms: [
        {
            chatRoomId: "1",
            title: "Chat Room 1",
            lastMessage: "Hello, this is the last message in chat room 1.",
            lastSentAt: new Date(),
            unreadCount: 2,
            image: "",
            enabled: true,
        },
        {
            chatRoomId: "2",
            title: "Chat Room 2",
            lastMessage: "This is another chat room with a longer message.",
            lastSentAt: new Date(),
            unreadCount: 0,
            image: "",
            enabled: true,
        },
        {
            chatRoomId: "3",
            title: "Chat Room 3",
            lastMessage: "Last message in chat room 3.",
            lastSentAt: new Date(),
            unreadCount: 5,
            image: "",
            enabled: false,
        },
    ],
};
