import React from "react";
import { Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import "@fontsource/noto-sans-kr";

export interface Request {
    head_count?: number;
    reward_price: number;
    currency: string;
    start_date?: string;
    end_date?: string;
    provide_food?: boolean;
    provide_trans_exp?: boolean;
    start_time?: string;
    end_time?: string;
}

interface RequestSideCardProps {
    request: Request;
}

const RequestSideCard: React.FC<RequestSideCardProps> = ({ request }) => {
    return (
        <Card
            sx={{
                maxWidth: 1080,
                borderRadius: "16px",
                fontFamily: "Noto Sans KR",
                backgroundColor: "#ffffff",
            }}
        >
            <CardContent sx={{ padding: "16px !important" }}>
                <List sx={{ padding: "0" }}>
                    <ListItem sx={{ padding: "0" }}>
                        <ListItemText
                            primary="참여 인원"
                            secondary={
                                request.head_count !== undefined
                                    ? `${request.head_count}명`
                                    : "정보 없음"
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ padding: "0" }}>
                        <ListItemText
                            primary="보상 금액"
                            secondary={`${request.reward_price} ${request.currency}`}
                        />
                    </ListItem>
                    <ListItem sx={{ padding: "0" }}>
                        <ListItemText
                            primary="시작 날짜"
                            secondary={request.start_date}
                        />
                    </ListItem>
                    <ListItem sx={{ padding: "0" }}>
                        <ListItemText
                            primary="식사 제공"
                            secondary={request.provide_food ? "예" : "아니오"}
                        />
                    </ListItem>
                    <ListItem sx={{ padding: "0" }}>
                        <ListItemText
                            primary="교통비 지원"
                            secondary={
                                request.provide_trans_exp ? "예" : "아니오"
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ padding: "0" }}>
                        <ListItemText
                            primary="시작 시간"
                            secondary={request.start_time}
                        />
                    </ListItem>
                    <ListItem sx={{ padding: "0" }}>
                        <ListItemText
                            primary="종료 시간"
                            secondary={request.end_time}
                        />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};

export default RequestSideCard;
