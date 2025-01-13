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

export interface StudentReviewAttributes {
    was_late: number;
    was_proactive: number;
    was_diligent: number;
    commu_ability: number;
    lang_fluent: number;
    goal_fulfillment: number;
    want_cowork: number;
    praise?: string;
    need_improve?: string;
}

interface ReviewOfStudentInputProps {
    control: Control<any>;
    onSubmit: () => void;
    onCancel: () => void;
}

const ReviewOfStudentInput: React.FC<ReviewOfStudentInputProps> = ({
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
                    학생 리뷰 입력
                </Typography>

                <Grid container spacing={4}>
                    <Grid size={6}>
                        <RatingInput
                            control={control}
                            name="was_late"
                            label="지각 여부"
                        />
                    </Grid>
                    <Grid size={6}>
                        <RatingInput
                            control={control}
                            name="was_proactive"
                            label="적극성"
                        />
                    </Grid>
                    <Grid size={6}>
                        <RatingInput
                            control={control}
                            name="was_diligent"
                            label="성실성"
                        />
                    </Grid>
                    <Grid size={6}>
                        <RatingInput
                            control={control}
                            name="commu_ability"
                            label="소통 능력"
                        />
                    </Grid>
                    <Grid size={6}>
                        <RatingInput
                            control={control}
                            name="lang_fluent"
                            label="언어 능력"
                        />
                    </Grid>
                    <Grid size={6}>
                        <RatingInput
                            control={control}
                            name="goal_fulfillment"
                            label="목표 달성도"
                        />
                    </Grid>
                    <Grid size={6}>
                        <RatingInput
                            control={control}
                            name="want_cowork"
                            label="같이 일하고 싶은 정도"
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
                            칭찬할 점
                        </Typography>
                        <ShortTextInput control={control} name="praise" />
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
                            개선할 점
                        </Typography>
                        <ShortTextInput control={control} name="need_improve" />
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

export default ReviewOfStudentInput;
