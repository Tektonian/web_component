import React from "react";
import ChatRoom from "./ChatRoom";
import { List } from "@mui/material";

interface ChatRoomListProps {
    isCheckbox: boolean;
    handleCheckboxToggle: (chatRoomId: string, checked: boolean) => void;
    handleLongPress: () => void;
    handleContextMenu: () => void;
    handleClick: () => void;
    chatRooms: {
        chatRoomId: string;
        title: string;
        lastMessage: string;
        lastSentAt: Date;
        unreadCount: number;
        image?: string;
        enabled: boolean;
    }[];
    selectedRooms: string[];
}

const ChatRoomList: React.FC<ChatRoomListProps> = ({
    isCheckbox,
    handleCheckboxToggle,
    handleLongPress,
    handleContextMenu,
    handleClick,
    chatRooms,
    selectedRooms,
}) => {
    return (
        <List
            style={{
                width: "100%",
                maxWidth: 1080,
                backgroundColor: "#f9f9f9",
            }}
        >
            {chatRooms.map((room) => (
                <ChatRoom
                    key={room.chatRoomId}
                    chatRoomId={room.chatRoomId}
                    title={room.title}
                    lastMessage={room.lastMessage}
                    lastSentAt={room.lastSentAt}
                    unreadCount={room.unreadCount}
                    image={room.image}
                    enabled={room.enabled}
                    isCheckbox={isCheckbox}
                    checked={selectedRooms.includes(room.chatRoomId)}
                    onClick={() => handleClick()}
                    onContextMenu={() => handleContextMenu()}
                    onLongPress={() => handleLongPress()}
                    onCheckboxToggle={(checked) =>
                        handleCheckboxToggle(room.chatRoomId, checked)
                    }
                />
            ))}
        </List>
    );
};

export default ChatRoomList;
