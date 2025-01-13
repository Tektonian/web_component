import React from "react";
import { CardContent, Typography, Grid2 as Grid, Box } from "@mui/material";
import GlobalNameInput from "../../../input/GlobalNameInput";
import ShortTextInput from "../../../input/ShortTextInput";
import RadioInput from "../../../input/RadioInput";
import DateInput from "../../../input/DateInput";
import type { APIType } from "api_spec";
import type { Control } from "react-hook-form";

interface StudentProfileInputCardContentProps
    extends Omit<APIType.StudentType.StudentProfileData<true>, "student_id"> {
    control: Control<
        Omit<APIType.StudentType.StudentProfileData<true>, "student_id">
    >;
}

const StudentProfileInputCardContent = ({
    name_glb,
    birth_date,
    phone_number,
    emergency_contact,
    gender,
    has_car,
    keyword_list,
    control,
}: StudentProfileInputCardContentProps) => {
    return (
        <CardContent
            sx={{
                paddingTop: {
                    xs: 0,
                    md: 10,
                },
                padding: 3,
                fontFamily: "Noto Sans KR",
                flex: 1,
            }}
        >
            <Box mb={5}>
                <GlobalNameInput
                    control={control}
                    name="name_glb"
                    availableLanguages={["US", "KO", "JP"]}
                    defaultValue={name_glb}
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
                        생년월일
                    </Typography>
                </Grid>
                <Grid size={9}>
                    <DateInput
                        control={control}
                        name="birth_date"
                        defaultValue={birth_date}
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
                        defaultValue={gender}
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
                        defaultValue={phone_number}
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
                        defaultValue={emergency_contact}
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
                        defaultValue={has_car}
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
                        name={`keyword_list.0`}
                        defaultValue={keyword_list.at(0) ?? ""}
                    />
                </Grid>
                <Grid size={3}>
                    <ShortTextInput
                        control={control}
                        name={`keyword_list.1`}
                        defaultValue={keyword_list.at(1) ?? ""}
                    />
                </Grid>
                <Grid size={3}>
                    <ShortTextInput
                        control={control}
                        name={`keyword_list.2`}
                        defaultValue={keyword_list.at(2) ?? ""}
                    />
                </Grid>
            </Grid>
        </CardContent>
    );
};

export default StudentProfileInputCardContent;
