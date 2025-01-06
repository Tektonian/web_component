import React from "react";
import {
    Card,
    CardContent,
    List,
    ListItemIcon,
    ListItemText,
    ListItemButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ReviewsIcon from "@mui/icons-material/Reviews";
import HistoryIcon from "@mui/icons-material/History";
import "@fontsource/noto-sans-kr";

interface StudentIndexCardProps {
    sections: string[];
}

export const StudentIndexCard: React.FC<StudentIndexCardProps> = ({
    sections,
}) => {
    return (
        <Card
            sx={{
                maxWidth: 1080,
                margin: "auto",
                borderRadius: "16px",
                fontFamily: "Noto Sans KR",
                backgroundColor: "#ffffff",
                padding: "1",
            }}
        >
            <CardContent>
                <List>
                    <ListItemButton component="a" href={`#${sections[0]}`}>
                        <ListItemIcon>
                            <InfoIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="기본 정보"
                            sx={{ fontFamily: "Noto Sans KR" }}
                        />
                    </ListItemButton>

                    <ListItemButton component="a" href={`#${sections[1]}`}>
                        <ListItemIcon>
                            <ReviewsIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="종합 리뷰"
                            sx={{ fontFamily: "Noto Sans KR" }}
                        />
                    </ListItemButton>

                    <ListItemButton component="a" href={`#${sections[2]}`}>
                        <ListItemIcon>
                            <HistoryIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="학력"
                            sx={{ fontFamily: "Noto Sans KR" }}
                        />
                    </ListItemButton>

                    <ListItemButton component="a" href={`#${sections[3]}`}>
                        <ListItemIcon>
                            <ReviewsIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="언어 능력"
                            sx={{ fontFamily: "Noto Sans KR" }}
                        />
                    </ListItemButton>

                    <ListItemButton component="a" href={`#${sections[4]}`}>
                        <ListItemIcon>
                            <HistoryIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="상세 이력 및 리뷰"
                            sx={{ fontFamily: "Noto Sans KR" }}
                        />
                    </ListItemButton>
                </List>
            </CardContent>
        </Card>
    );
};

export default StudentIndexCard;
