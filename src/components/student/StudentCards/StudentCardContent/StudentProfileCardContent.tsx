import React from "react";
import { CardContent, Typography, Grid2 as Grid } from "@mui/material";

import type { APIType } from "@mesh/api_spec";

interface StudentProfileCardContentProps
    extends APIType.StudentType.StudentProfileData<true | false> {
    isMyPage: boolean;
}
const StudentProfileCardContent = ({
    name_glb,
    birth_date,
    phone_number,
    emergency_contact,
    gender,
    has_car,
    keyword_list,
    isMyPage,
}: StudentProfileCardContentProps) => {
    return (
        <CardContent
            sx={{
                padding: 3,
                fontFamily: "Noto Sans KR",
                flex: 1,
            }}
        >
            <Typography
                variant="h5"
                component="div"
                sx={{
                    fontFamily: "Noto Sans KR",
                    fontSize: "1.5rem",
                    marginBottom: 2,
                }}
            >
                {/* TODO: add global later */}
                {name_glb["KO"] ?? name_glb["JP"] ?? name_glb["US"]}
            </Typography>

            <Grid container spacing={2}>
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

                <Grid size={3}>
                    {isMyPage && (
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
                    )}
                </Grid>
                <Grid size={9}>
                    {isMyPage && (
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            {birth_date}
                        </Typography>
                    )}
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
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Noto Sans KR",
                            fontSize: "1rem",
                            color: "rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        {gender}
                    </Typography>
                </Grid>

                {isMyPage && phone_number && (
                    <>
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
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "Noto Sans KR",
                                    fontSize: "1rem",
                                    color: "rgba(0, 0, 0, 0.7)",
                                }}
                            >
                                {phone_number}
                            </Typography>
                        </Grid>
                    </>
                )}

                {isMyPage && emergency_contact && (
                    <>
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
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "Noto Sans KR",
                                    fontSize: "1rem",
                                    color: "rgba(0, 0, 0, 0.7)",
                                }}
                            >
                                {emergency_contact}
                            </Typography>
                        </Grid>
                    </>
                )}

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
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Noto Sans KR",
                            fontSize: "1rem",
                            color: "rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        {has_car ? "예" : "아니오"}
                    </Typography>
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
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Noto Sans KR",
                            fontSize: "1rem",
                            color: "rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        {keyword_list[0]}
                    </Typography>
                </Grid>
                <Grid size={3}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Noto Sans KR",
                            fontSize: "1rem",
                            color: "rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        {keyword_list[1]}
                    </Typography>
                </Grid>
                <Grid size={3}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Noto Sans KR",
                            fontSize: "1rem",
                            color: "rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        {keyword_list[2]}
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    );
};

export default StudentProfileCardContent;
