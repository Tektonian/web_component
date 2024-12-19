import React, { useState } from 'react';
import { Avatar, Typography, ListItem, ListItemButton, ListItemText, ListItemAvatar, Checkbox, Badge } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

interface IChatRoom {
    onClick: () => void;
    onContextMenu: () => void;
    onLongPress: () => void;
    chatRoomId?: string;
    isCheckbox: boolean;
    image?: string;
    title: string;
    enabled?: boolean;
    lastMessage: string;
    lastSentAt: Date;
    unreadCount: number;
    checked: boolean;
    onCheckboxToggle: (checked: boolean) => void;
}

const ChatRoom = (props: IChatRoom) => {
    const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);

    const handleMouseDown = () => {
        const timer = setTimeout(() => {
            props.onLongPress();
        }, 1000);
        setPressTimer(timer);
    };

    const handleMouseUp = () => {
        if (pressTimer) {
            clearTimeout(pressTimer);
            setPressTimer(null);
        } else {
            props.onClick();
        }
    };

    const handleCheckboxToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onCheckboxToggle(event.target.checked);
    };

    return (
        <ListItem
            disablePadding
            secondaryAction={
                props.isCheckbox && (
                    <Checkbox
                        edge="end"
                        onChange={handleCheckboxToggle}
                        checked={props.checked}
                    />
                )
            }
        >
            <ListItemButton
                onContextMenu={props.onContextMenu}
                disabled={!props.enabled}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                style={{
                    padding: "12px",
                    borderBottom: "1px solid #ccc",
                }}
                sx={{
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                    },
                    '&:active': {
                        backgroundColor: 'rgba(0, 0, 0, 0.16)',
                    },
                }}
            >
                <ListItemAvatar>
                    <Badge badgeContent={props.unreadCount} color="primary">
                        <Avatar
                            src={props.image}
                            alt={props.title}
                        >
                            {!props.image && <PersonIcon />}
                        </Avatar>
                    </Badge>
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography
                            variant="body1"
                            style={{ fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        >
                            {props.title}
                        </Typography>
                    }
                    secondary={
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        >
                            {props.lastMessage}
                        </Typography>
                    }
                />
            </ListItemButton>
        </ListItem>
    );
};

export default ChatRoom;
