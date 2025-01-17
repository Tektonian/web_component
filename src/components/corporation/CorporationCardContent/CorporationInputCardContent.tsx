import React from "react";
import { CardContent, Box, Typography, Grid2 as Grid } from "@mui/material";
import ShortTextInput from "../../input/ShortTextInput";
import { CountrySelect } from "../../input/CountrySelect";
import type { Control } from "react-hook-form";
import { APIType } from "@mesh/api_spec";

interface CorpInputCardContentProps
    extends APIType.CorporationType.CorpCardData {
    control: Control<APIType.CorporationType.CorpCardData>;
}

const CorporationInputCardContent = ({
    control,
    ...defaultValues
}: CorpInputCardContentProps) => {
    return (
        <CardContent sx={{ padding: 3, fontFamily: "Noto Sans KR", flex: 1 }}>
            <Grid container spacing={4}>
                <Grid size={3}>
                    <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                            fontFamily: "Noto Sans KR",
                        }}
                    >
                        국적
                    </Typography>
                </Grid>
                <Grid size={9}>
                    <CountrySelect
                        // @ts-ignore
                        control={control}
                        name="nationality"
                        defaultValue={defaultValues?.nationality ?? "KO"}
                        stdNationality={defaultValues?.nationality ?? "KO"}
                    />
                </Grid>
                <Grid size={3}>
                    <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                            fontFamily: "Noto Sans KR",
                        }}
                    >
                        회사명
                    </Typography>
                </Grid>
                <Grid size={9}>
                    <ShortTextInput
                        control={control}
                        name="corp_name"
                        defaultValue={defaultValues?.corp_name}
                    />
                </Grid>
                <Grid size={3}>
                    <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                            fontFamily: "Noto Sans KR",
                        }}
                    >
                        연락처
                    </Typography>
                </Grid>
                <Grid size={9}>
                    <ShortTextInput
                        control={control}
                        name="phone_number"
                        defaultValue={defaultValues?.phone_number}
                    />
                </Grid>
                <Grid size={3}>
                    <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                            fontFamily: "Noto Sans KR",
                        }}
                    >
                        대표명
                    </Typography>
                </Grid>
                <Grid size={9}>
                    <ShortTextInput
                        control={control}
                        name="ceo_name"
                        defaultValue={defaultValues?.ceo_name}
                    />
                </Grid>

                <Grid size={3}>
                    <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                            fontFamily: "Noto Sans KR",
                        }}
                    >
                        주소
                    </Typography>
                </Grid>
                <Grid size={9}>
                    <ShortTextInput
                        control={control}
                        name="corp_address"
                        defaultValue={defaultValues?.corp_address}
                    />
                </Grid>

                <Grid size={3}>
                    <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                            fontFamily: "Noto Sans KR",
                        }}
                    >
                        업종
                    </Typography>
                </Grid>
                <Grid size={9}>
                    <ShortTextInput
                        control={control}
                        name="biz_type"
                        defaultValue={defaultValues?.biz_type}
                    />
                </Grid>
            </Grid>
        </CardContent>
    );
};

export default CorporationInputCardContent;
