import React, { useState } from "react";
import ShortTextInput from "./ShortTextInput"
import { Box, Typography, Grid2 as Grid, Card, CardContent, Button } from "@mui/material";
import { Control, useWatch } from "react-hook-form";

export interface EmailTokenInputProps {
    control: Control<any>; 
    onSend: (verifyEmail: string, userType: string) => void;
    userType: "student" | "corp" | "orgn";
}

const EmailTokenInput: React.FC<EmailTokenInputProps> = ({
    control,
    onSend,
    userType,
}) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [timer, setTimer] = useState(0);

    const email = useWatch({
        control,
        name: "mail_address"
    })

    const handleSendEmail = () => {
        onSend(email, userType);
        setIsButtonDisabled(true);
        setTimer(30);

        const countdown = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(countdown);
                    setIsButtonDisabled(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    return (
        <Card
            sx={{
                maxWidth: '1080px',
                margin: 'auto',
                borderRadius: '16px',
                fontFamily: 'Noto Sans KR',
                color: 'rgba(0, 0, 0, 0.7)',
                backgroundColor: '#f5f5f5',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                position: 'relative',
            }}
        >
            <CardContent>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={3}>
                        <Grid size={3}>
                            <Typography
                                variant="body2"
                                fontWeight="bold"
                                sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' }}
                            >
                                메일 주소:
                            </Typography>
                        </Grid>
                        <Grid size={6}>
                            <ShortTextInput
                                control={control}
                                name="mail_address"
                                label="Email"
                            />
                        </Grid>
                        <Grid size={3}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={handleSendEmail} 
                                disabled={isButtonDisabled}
                            >
                                {isButtonDisabled ? `${timer}초 남음` : "Send"}
                            </Button>
                        </Grid>
                        <Grid size={3}>
                            <Typography
                                variant="body2"
                                fontWeight="bold"
                                sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' }}
                            >
                                인증 토큰:
                            </Typography>
                        </Grid>
                        <Grid size={6}>
                            <ShortTextInput
                                control={control}
                                name="token"
                                label="Token"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
};

export default EmailTokenInput;
