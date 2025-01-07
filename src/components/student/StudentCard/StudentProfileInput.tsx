import React from "react";
import { CardContent, Box, Typography, Grid2 as Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import StudentProfileCardContent from "./StudentCardContent/StudentProfileCardContent";
import StudentProfileInputCardContent from "./StudentCardContent/StudentProfileInputCardContent";
import * as EditableCard from "../../input/EditableCard";
import EditableCardHeader from "../../input/EditableCardHeader";
import "@fontsource/noto-sans-kr";

import type { Control } from "react-hook-form";
import type { StudentProfileData } from "./StudentCardContent/StudentCard.types";

interface StudentInputCardProps extends StudentProfileData {
    control: Control<StudentProfileData>;
}

const StudentInputCard = ({
    control,
    ...defaultValues
}: StudentInputCardProps) => {
    return (
        <EditableCard.EditableCard
            editMode={true}
            header={<EditableCardHeader disabled={true} editMode={true} />}
        >
            <EditableCard.EditMode>
                <StudentProfileInputCardContent
                    control={control}
                    {...defaultValues}
                />
            </EditableCard.EditMode>
        </EditableCard.EditableCard>
    );
};

export default StudentInputCard;
