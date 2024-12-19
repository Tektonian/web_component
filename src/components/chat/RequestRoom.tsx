import React from 'react';
import { ListItem, ListItemButton, ListItemAvatar, Avatar, Typography } from "@mui/material";

export interface RequestRoomProps {
    title: string;
    start_date: Date;
    logo_image?: string;
    isHover: boolean;
    onClick: () => void;
}

const RequestRoom = (props: RequestRoomProps) => {
    return (
        <ListItem
            disablePadding
            style={{ padding: "6px !important", borderBottom: "1px solid #ccc" }}
        >
            <ListItemButton onClick={props.onClick}>
                <ListItemAvatar>
                    <Avatar src={props.logo_image} alt={props.title} />
                </ListItemAvatar>
                {props.isHover && (
                    <div style={{ marginLeft: "12px" }}>
                        <Typography
                            variant="body1"
                            style={{ fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        >
                            {props.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                        >
                            {`Start Date: ${props.start_date.toLocaleDateString()}`}
                        </Typography>
                    </div>
                )}
            </ListItemButton>
        </ListItem>
    );
};

export default RequestRoom;
