import * as React from "react";
import {
    Box,
    Card,
    CardContent,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Typography,
} from "@mui/material";
import "@fontsource/noto-sans-kr";

const steps = [
    {
        label: "기본 정보 입력",
        description: "이름, 생년월일, 성별 등의 기본 정보를 입력하세요.",
    },
    {
        label: "학력 입력",
        description: "최종 학력과 관련 정보를 입력하세요.",
    },
    {
        label: "언어 능력 입력",
        description: "구사할 수 있는 언어와 숙련도를 입력하세요.",
    },
    {
        label: "이메일 입력",
        description: "본인 확인을 위한 이메일 주소를 입력하세요.",
    },
    {
        label: "인증 토큰 입력",
        description: "이메일로 전송된 인증 토큰을 입력하세요.",
    },
    {
        label: "완료!",
        description: "학생 인증이 완료되었습니다.",
    },
];

interface StudentStepperProps {
    currentStep: number;
}

const StudentStepperCard: React.FC<StudentStepperProps> = ({ currentStep }) => {
    return (
        <Card sx={{ maxWidth: 1080, fontFamily: "Noto Sans KR" }}>
            <CardContent>
                <Stepper activeStep={currentStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel>{step.label}</StepLabel>
                            <StepContent>
                                <Typography sx={{ fontFamily: "Noto Sans KR" }}>
                                    {step.description}
                                </Typography>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {currentStep === steps.length && (
                    <Box sx={{ p: 3 }}>
                        <Typography sx={{ fontFamily: "Noto Sans KR" }}>
                            모든 단계가 완료되었습니다. 학생 인증이
                            완료되었습니다!
                        </Typography>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

export default StudentStepperCard;
