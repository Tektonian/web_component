import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { Avatar, Typography, ListItem, ListItemButton, ListItemText, ListItemAvatar, Checkbox, Badge, Stack} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

interface IChatRoom {
    onClick?: React.MouseEventHandler;
    onContextMenu?: React.MouseEventHandler;
    onLongPress?: React.MouseEventHandler;
    chatRoomId?: string;
    checkBoxMode?: boolean;
    image?: string;
    title?: string;
    disabled?: boolean;
    lastMessage?: string;
    lastSentAt?: Date;
    unreadCount?: number;
    onCheckboxToggle?: (checked: boolean) => void;
}
const elapsedTime = (date?: Date): string => {
    if(!date){
        return ""
    }

	const start = date;
	const end = new Date();

	const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
	if (seconds < 60) return '방금 전';

	const minutes = seconds / 60;
	if (minutes < 60) return `${Math.floor(minutes)}분 전`;

	const hours = minutes / 60;
	if (hours < 24) return `${Math.floor(hours)}시간 전`;

	const days = hours / 24;
	if (days < 7) return `${Math.floor(days)}일 전`;

	return `${start.toLocaleDateString()}`;
};

const ChatRoom = (props: IChatRoom) => {
    const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
    const [isCheckBoxMode, setCheckBoxMode] = useState(props.checkBoxMode ?? false);
    const [boxChecked, setBoxChecked] = useState(false);


    const handleCheckBoxChange = () => {
        if(props.disabled){
            return;
        }
        props.onCheckboxToggle?.(!boxChecked);
        setBoxChecked((prev) => !prev)
    }

    const handleMouseDown: React.MouseEventHandler = (e) => {
        if(props.disabled){
            return;
        }
        if(isCheckBoxMode === true){
            handleCheckBoxChange();
        }
        else{
            const timer = setTimeout(() => {
                setCheckBoxMode(true)
                props.onLongPress?.(e);
            }, 1000);
            setPressTimer(timer);
        }
    };

    const handleMouseUp: React.MouseEventHandler= (e) => {
        if(props.disabled){
            return;
        }
        if(isCheckBoxMode === false){
            if (pressTimer) {
                clearTimeout(pressTimer);
                setPressTimer(null);
            } else {
                props.onClick?.(e);
            }
        }
    };

    const handleContextMenu: React.MouseEventHandler = (e) => {
        if(props.disabled === true){
            return;
        }
        props.onContextMenu?.(e)
    }



    return (
        <ListItem
            disablePadding
            secondaryAction={
                isCheckBoxMode &&  !props.disabled && (
                    <Checkbox
                        edge="end"
                        onChange={ handleCheckBoxChange}
                        checked={boxChecked}
                    />
                )
            }
        >
            <ListItemButton
                onContextMenu={handleContextMenu}
                disabled={props.disabled ?? false}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                // selected={true}
                sx={{
                    minWidth: "300px",
                    flexShrink: 1,
                    background: isCheckBoxMode === false ? undefined: 
                                ( boxChecked ? 'rgb(102, 157, 100)' :'rgb(102, 157, 246)'),
                    'padding': "12px",
                    'borderBottom': "1px solid #ccc",
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                    },
                    '&:active': {
                        backgroundColor: 'rgba(0, 0, 0, 0.16)',
                    },
                }}
            >
                <ListItemAvatar
                    sx={{flexShrink: 0}}
                >
                    {/** undefined when falsy value like '0', undefined */}
                    <Badge badgeContent={props.unreadCount || undefined} color="primary">
                        <Avatar
                            src={props.image}
                        >
                            {/** when not falsy value. (e.g. "", undefined) */}
                            {props.image || <PersonIcon />}
                        </Avatar>
                    </Badge>
                </ListItemAvatar>
                <ListItemText
                    sx={{flexGrow: 1, flexShrink: 1}}
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
                    {
                        isCheckBoxMode === true ?
                            <></>
                        :
                            <ListItemText
                                sx={{flexShrink: 1}}
                                primary={
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        style={{ whiteSpace: 'nowrap' }}
                                    >
                                        {elapsedTime(props.lastSentAt)}
                                    </Typography>
                                }
                            />
                    }
            </ListItemButton>
        </ListItem>
    );
};

export default ChatRoom;
