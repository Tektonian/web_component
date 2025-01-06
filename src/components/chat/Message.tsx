import React from "react";
import { Box, Avatar, Badge, Typography, Card } from "@mui/material";

export interface MessageProps {
    content?: string;
    direction: "outgoing" | "inbound" | "alarm";
    contentType?: "image" | "text" | "map" | "file" | "alarm";
    senderName?: string;
    senderImage?: string;
    imageUrl?: string;
    sentAt?: Date;
    unread?: number;
    status: 0 | 1 | 2;
}

const Profile = ({
    senderName,
    senderImage,
}: {
    senderName?: string;
    senderImage?: string;
}) => {
    return (
        <Box
            sx={{
                minWidth: 50,
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {senderName ? (
                <Avatar
                    alt={senderName}
                    src={senderImage}
                    sx={{ width: 40, height: 40 }}
                >
                    {senderName[0]}
                </Avatar>
            ) : (
                <Box sx={{ width: 40, height: 40 }} />
            )}
        </Box>
    );
};

const TextContent = ({ text }: { text: string }) => {
    return (
        <Typography variant="body2" sx={{ wordWrap: "break-word" }}>
            {text}
        </Typography>
    );
};

const ImageContent = ({ imageUrl }: { imageUrl?: string }) => {
    return (
        <Box
            component="img"
            src={imageUrl}
            alt="Image content"
            sx={{
                width: "100%",
                height: 140,
                objectFit: "cover",
                borderRadius: 1,
                backgroundColor: "#e0e0e0",
            }}
        />
    );
};

const renderContent = (props: MessageProps) => {
    let content;

    switch (props.contentType) {
        case "alarm":
            content = <TextContent text={props.content || ""} />;
            break;
        case "image":
            content = <ImageContent imageUrl={props.imageUrl} />;
            break;
        default:
            content = <TextContent text={props.content || ""} />;
            break;
    }

    return (
        <Box sx={{ maxWidth: "70%", flexShrink: 1 }}>
            {props.senderName && (
                <Typography variant="caption" fontWeight="medium">
                    {props.senderName}
                </Typography>
            )}
            <Card variant="outlined" sx={{ padding: 1, marginTop: 0.5 }}>
                {content}
            </Card>
        </Box>
    );
};

const Footer = ({
    unread,
    sentAt,
    direction,
}: {
    unread?: number;
    sentAt?: Date;
    direction: "outgoing" | "inbound";
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems:
                    direction === "outgoing" ? "flex-end" : "flex-start",
                textAlign: direction === "outgoing" ? "right" : "left",
                marginLeft: 1,
                marginRight: 1,
            }}
        >
            {sentAt && (
                <Typography
                    variant="caption"
                    color="textSecondary"
                    sx={{ marginBottom: 1 }}
                >
                    {sentAt.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </Typography>
            )}
            {unread !== undefined && unread > 0 && (
                <Badge
                    badgeContent={unread}
                    color="primary"
                    sx={{ marginLeft: 1, marginRight: 1 }}
                />
            )}
        </Box>
    );
};

const Message = (props: MessageProps) => {
    if (props.direction === "alarm") {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: 2,
                    alignItems: "center",
                }}
            >
                {renderContent(props)}
            </Box>
        );
    }
    return props.direction === "outgoing" ? (
        <Box sx={{ display: "flex", flexDirection: "row", padding: 2 }}>
            <Box sx={{ flexGrow: 1 }} />
            <Footer
                sentAt={props.sentAt}
                unread={props.unread}
                direction={props.direction}
            />
            {renderContent(props)}
        </Box>
    ) : (
        <Box sx={{ display: "flex", flexDirection: "row", padding: 2 }}>
            <Profile
                senderName={props.senderName}
                senderImage={props.senderImage}
            />
            {renderContent(props)}
            <Footer
                sentAt={props.sentAt}
                unread={props.unread}
                direction={props.direction}
            />
            <Box sx={{ flexGrow: 1 }} />
        </Box>
    );
};

export default Message;
