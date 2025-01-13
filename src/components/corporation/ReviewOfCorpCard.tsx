import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Grid2 as Grid,
    Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "@fontsource/noto-sans-kr";

export interface ReviewOfCorpCardProps {
    review_text: string;
    prep_requirement: string;
    work_atmosphere: string;
    sense_of_achive: number;
}

// 별점 렌더링 함수
const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating); // 정수 부분
    const halfStar = rating % 1 >= 0.5; // 반별 여부
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // 빈 별 개수

    return (
        <>
            {Array.from({ length: fullStars }, (_, i) => (
                <StarIcon key={`full-${i}`} color="primary" />
            ))}
            {halfStar && <StarHalfIcon color="primary" />}
            {Array.from({ length: emptyStars }, (_, i) => (
                <StarBorderIcon key={`empty-${i}`} color="primary" />
            ))}
        </>
    );
};

const ReviewOfCorpCard: React.FC<ReviewOfCorpCardProps> = ({
    review_text,
    prep_requirement,
    work_atmosphere,
    sense_of_achive,
}) => {
    return (
        <Card sx={{ fontFamily: "Noto Sans KR" }}>
            <CardContent>
                {/* Sense of Achievement */}
                <Box sx={{ textAlign: "center", marginBottom: 2 }}>
                    {renderStars(sense_of_achive / 2)}{" "}
                    {/* 0.5~5.0 스케일로 변환 */}
                </Box>

                {/* Review Text */}
                <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                    <Grid size={3}>
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: "bold",
                                fontFamily: "Noto Sans KR",
                            }}
                        >
                            리뷰:
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <Typography
                            variant="body1"
                            sx={{ fontFamily: "Noto Sans KR" }}
                        >
                            {review_text}
                        </Typography>
                    </Grid>
                </Grid>

                {/* Preparation Requirement */}
                <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                    <Grid size={3}>
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: "bold",
                                fontFamily: "Noto Sans KR",
                            }}
                        >
                            준비물:
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <Typography
                            variant="body1"
                            sx={{ fontFamily: "Noto Sans KR" }}
                        >
                            {prep_requirement}
                        </Typography>
                    </Grid>
                </Grid>

                {/* Work Atmosphere */}
                <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                    <Grid size={3}>
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: "bold",
                                fontFamily: "Noto Sans KR",
                            }}
                        >
                            분위기:
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <Typography
                            variant="body1"
                            sx={{ fontFamily: "Noto Sans KR" }}
                        >
                            {work_atmosphere}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ReviewOfCorpCard;
