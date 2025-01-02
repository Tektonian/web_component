import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid2 as Grid,
    Box,
} from "@mui/material";
import { Control } from "react-hook-form";
import "@fontsource/noto-sans-kr";
import ShortTextInput from "./ShortTextInput"
import RadioInput from "./RadioInput"
import DateInput from "./DateInput"
import GlobalNameInput from "./GlobalNameInput"

export interface StudentProfileData {
    name_glb: {
        language: string;
        name: string;
    };
    nationality: string;
    birth_date: Date;
    phone_number?: string;
    emergency_contact?: string;
    gender: number;
    image: string;
    has_car: 0 | 1;
    keyword_list: string[];
}

interface StudentProfileInputProps {
    initialData?: StudentProfileData;
    control: Control<any>;
}

const StudentProfileInput: React.FC<StudentProfileInputProps> = ({
    initialData,
    control,
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
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                position: "relative",
            }}
        >
            <CardMedia
                component="img"
                image={initialData?.image}
                sx={{
                    width: "160px",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    margin: "16px",
                }}
            />

            <CardContent
                sx={{ padding: 3, fontFamily: "Noto Sans KR", flex: 1 }}
            >
                <Box mb={5}>
                    <GlobalNameInput
                        control={control}
                        name="name_glb"
                        availableLanguages={["en", "kr", "jp"]}
                        defaultValue={initialData?.name_glb}
                    />
                </Box>
                <Grid container spacing={4}>
                    <Grid size={3}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            국적
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <ShortTextInput
                            control={control}
                            name="nationality"
                            defaultValue={initialData?.nationality}
                        />
                    </Grid>

                    <Grid size={3}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            생년월일
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <DateInput
                            control={control}
                            name="birth_date"
                            defaultValue={initialData?.birth_date}
                        />
                    </Grid>

                    <Grid size={3}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            성별
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <RadioInput
                            control={control}
                            name="gender"
                            options={[
                                { value: 0, label: "남성" },
                                { value: 1, label: "여성" },
                            ]}
                            defaultValue={initialData?.gender}
                        />
                    </Grid>

                    <Grid size={3}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            전화번호
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <ShortTextInput
                            control={control}
                            name="phone_number"
                            defaultValue={initialData?.phone_number}
                        />
                    </Grid>

                    <Grid size={3}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            긴급 연락처
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <ShortTextInput
                            control={control}
                            name="emergency_contact"
                            defaultValue={initialData?.emergency_contact}
                        />
                    </Grid>

                    <Grid size={3}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            차량 소유 여부
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <RadioInput
                            control={control}
                            name="has_car"
                            options={[
                                { value: 0, label: "없음" },
                                { value: 1, label: "있음" },
                            ]}
                            defaultValue={initialData?.has_car}
                        />
                    </Grid>

                    <Grid size={3}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            키워드
                        </Typography>
                    </Grid>
                    <Grid size={3}>
                        <ShortTextInput
                            control={control}
                            name={`keyword_list[${0}]`}
                            defaultValue={initialData?.keyword_list[0]}
                        />
                    </Grid>
                    <Grid size={3}>
                        <ShortTextInput
                            control={control}
                            name={`keyword_list[${1}]`}
                            defaultValue={initialData?.keyword_list[1]}
                        />
                    </Grid>
                    <Grid size={3}>
                        <ShortTextInput
                            control={control}
                            name={`keyword_list[${2}]`}
                            defaultValue={initialData?.keyword_list[2]}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default StudentProfileInput;
