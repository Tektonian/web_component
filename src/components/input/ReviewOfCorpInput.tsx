import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Grid2 as Grid,
    Box,
} from "@mui/material";
import { Control } from "react-hook-form";
import "@fontsource/noto-sans-kr";
import ShortTextInput from "./ShortTextInput";
import RatingInput from "../input/RatingInput";

export interface ReviewOfCorpProps {
    review_text: string;
    prep_requirement: string;
    work_atmosphere: string;
    sense_of_achive: number;
}

interface ReviewOfCorpInputProps {
    control: Control<any>;
    onSubmit: () => void;
    onCancel: () => void;
}

const ReviewOfCorpInput: React.FC<ReviewOfCorpInputProps> = ({
    control,
    onSubmit,
    onCancel,
}) => {
    return (
        <Card
            sx={{
                maxWidth: "1080px",
                margin: "auto",
                borderRadius: "16px",
                fontFamily: "Noto Sans KR",
                color: "rgba(0, 0, 0, 0.7)",
                backgroundColor: "#f5f5f5",
                boxShadow: "none",
                padding: 3,
            }}
        >
            <CardContent>
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ fontFamily: "Noto Sans KR", marginBottom: 3 }}
                >
                    기업 리뷰 입력
                </Typography>

                <Grid container spacing={4}>
                    <Grid size={12}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                                marginBottom: 1,
                            }}
                        >
                            리뷰 내용
                        </Typography>
                        <ShortTextInput control={control} name="review_text" />
                    </Grid>

                    <Grid size={12}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                                marginBottom: 1,
                            }}
                        >
                            준비 요건
                        </Typography>
                        <ShortTextInput
                            control={control}
                            name="prep_requirement"
                        />
                    </Grid>

                    <Grid size={12}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                                marginBottom: 1,
                            }}
                        >
                            근무 분위기
                        </Typography>
                        <ShortTextInput
                            control={control}
                            name="work_atmosphere"
                        />
                    </Grid>

                    <Grid size={12}>
                        <RatingInput
                            control={control}
                            name="sense_of_achive"
                            label="성취감"
                        />
                    </Grid>
                </Grid>

                <Box mt={4} display="flex" justifyContent="space-between">
                    <button
                        onClick={onCancel}
                        style={{
                            border: "none",
                            background: "none",
                            fontFamily: "Noto Sans KR",
                            fontSize: "1rem",
                            color: "rgba(0, 0, 0, 0.7)",
                            cursor: "pointer",
                        }}
                    >
                        취소
                    </button>
                    <button
                        onClick={onSubmit}
                        style={{
                            border: "none",
                            background: "none",
                            fontFamily: "Noto Sans KR",
                            fontSize: "1rem",
                            color: "rgba(0, 0, 0, 0.7)",
                            cursor: "pointer",
                        }}
                    >
                        제출
                    </button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ReviewOfCorpInput;
