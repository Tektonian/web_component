import { CardContent, Avatar, Typography, Grid2 as Grid } from "@mui/material";
import { countries } from "./MyProfileCard.types";
import type { MyProfileCardData } from "./MyProfileCard.types";

function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name: string) {
    if (name.split(" ").length < 2) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(" ")[0][0]}`,
        };
    }
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
}

const MyProfileCardContent = ({
    name,
    image,
    location,
    nationality,
    workingCountry,
}: MyProfileCardData) => {
    return (
        <CardContent>
            {image === undefined ? (
                <Avatar {...stringAvatar(name)} />
            ) : (
                <Avatar src={image} />
            )}
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Typography component="div" variant="h5" gutterBottom>
                        {name}
                    </Typography>
                </Grid>
                <Grid
                    size={6}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                    <Typography variant="body1">국적</Typography>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${nationality.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${nationality.toLowerCase()}.png`}
                        alt=""
                    />
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                    >
                        {
                            // TODO: add global later
                            // @ts-ignore
                            countries.find((val) => val.code === nationality)
                                ?.name["KR"]
                        }
                    </Typography>
                </Grid>
                <Grid size={6}>
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                    >
                        {location}
                    </Typography>
                </Grid>
                <Grid
                    size={6}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                    <Typography variant="body1">유학</Typography>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${workingCountry.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${workingCountry.toLowerCase()}.png`}
                        alt=""
                    />
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                    >
                        {
                            // TODO: add global later
                            // @ts-ignore
                            countries.find((val) => val.code === workingCountry)
                                ?.name["KR"]
                        }
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    );
};

export default MyProfileCardContent;
