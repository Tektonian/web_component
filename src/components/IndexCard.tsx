import React from 'react';
import { Card, CardContent, List, ListItemIcon, ListItemText, ListItemButton, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ReviewsIcon from '@mui/icons-material/Reviews';
import HistoryIcon from '@mui/icons-material/History';
import WorkIcon from '@mui/icons-material/Work';
import '@fontsource/noto-sans-kr';

interface IndexCardProps {
    sections: string[];
    roles: "student" | "corp" | "orgn" | "normal" | "";
}

const IndexCard: React.FC<IndexCardProps> = ({ sections, roles }) => {
    return (
        <Card
            sx={{
                maxWidth: 1080,
                margin: 'auto',
                borderRadius: '16px',
                fontFamily: 'Noto Sans KR',
                backgroundColor: '#ffffff',
                padding: '1',
            }}
        >
            <CardContent>
                <List>
                    {roles === "student" && (
                        <>
                            <ListItemButton component="a" href={`#${sections[0]}`}>
                                <ListItemIcon>
                                    <InfoIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="기본 정보" sx={{ fontFamily: 'Noto Sans KR' }} />
                            </ListItemButton>

                            <ListItemButton component="a" href={`#${sections[1]}`}>
                                <ListItemIcon>
                                    <ReviewsIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="종합 리뷰" sx={{ fontFamily: 'Noto Sans KR' }} />
                            </ListItemButton>

                            <ListItemButton component="a" href={`#${sections[2]}`}>
                                <ListItemIcon>
                                    <HistoryIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="학력" sx={{ fontFamily: 'Noto Sans KR' }} />
                            </ListItemButton>

                            <ListItemButton component="a" href={`#${sections[3]}`}>
                                <ListItemIcon>
                                    <ReviewsIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="언어 능력" sx={{ fontFamily: 'Noto Sans KR' }} />
                            </ListItemButton>

                            <ListItemButton component="a" href={`#${sections[4]}`}>
                                <ListItemIcon>
                                    <HistoryIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="상세 이력 및 리뷰" sx={{ fontFamily: 'Noto Sans KR' }} />
                            </ListItemButton>
                        </>
                    )}

                    {roles === "corp" && (
                        <>
                            <ListItemButton component="a" href="#0">
                                <ListItemIcon>
                                    <InfoIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="기본 정보" sx={{ fontFamily: 'Noto Sans KR' }} />
                            </ListItemButton>

                            <ListItemButton component="a" href="#1">
                                <ListItemIcon>
                                    <WorkIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="진행 중인 의뢰" sx={{ fontFamily: 'Noto Sans KR' }} />
                            </ListItemButton>

                            <ListItemButton component="a" href="#2">
                                <ListItemIcon>
                                    <ReviewsIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="모집 중인 의뢰" sx={{ fontFamily: 'Noto Sans KR' }} />
                            </ListItemButton>

                            <ListItemButton component="a" href="#3">
                                <ListItemIcon>
                                    <HistoryIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="과거 의뢰" sx={{ fontFamily: 'Noto Sans KR' }} />
                            </ListItemButton>
                        </>
                    )}
                </List>
            </CardContent>
        </Card>
    );
};

export default IndexCard;
