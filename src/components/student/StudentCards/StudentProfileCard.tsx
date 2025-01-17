import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardMedia } from "@mui/material";
import StudentProfileCardContent from "./StudentCardContent/StudentProfileCardContent";
import * as EditableCard from "./../..//input/EditableCard";
import "@fontsource/noto-sans-kr";

import type { Control } from "react-hook-form";
import { APIType } from "@mesh/api_spec";
interface StudentProfileCardProps
    extends APIType.StudentType.StudentProfileData<false> {
    onClickCard?: React.MouseEventHandler;
}

const StudentProfileCard = ({
    onClickCard,
    ...defaultValues
}: StudentProfileCardProps) => {
    return (
        <EditableCard.EditableCard header={undefined}>
            <EditableCard.NormalMode>
                <StudentProfileCardContent
                    {...defaultValues}
                    isMyPage={false}
                />
            </EditableCard.NormalMode>
        </EditableCard.EditableCard>
    );
};

export default StudentProfileCard;
