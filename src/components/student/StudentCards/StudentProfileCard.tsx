import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import StudentProfileCardContent from "./StudentCardContent/StudentProfileCardContent";
import StudentProfileInputCardContent from "./StudentCardContent/StudentProfileInputCardContent";
import * as EditableCard from "./../..//input/EditableCard";
import EditableCardHeader from "../../input/EditableCardHeader";
import "@fontsource/noto-sans-kr";

import type { Control } from "react-hook-form";
import { APIType } from "api_spec";
interface StudentProfileCardProps
    extends APIType.StudentType.StudentProfileData {
    isMyPage?: boolean;
    isEditMode?: boolean;
    onClickSaveIcon?: React.MouseEventHandler;
}

const StudentProfileCard = ({
    isMyPage = false,
    isEditMode = false,
    onClickSaveIcon,
    ...defaultValues
}: StudentProfileCardProps) => {
    const [editMode, setEditMode] = useState(isEditMode);
    const [dirted, setDirted] = useState(false);

    const { control } = useForm<
        Omit<APIType.StudentType.StudentProfileData, "student_id">
    >({
        defaultValues: defaultValues,
    });

    useEffect(() => {
        console.log(control);
    }, [control._formState.isDirty]);
    return (
        <EditableCard.EditableCard
            editMode={editMode}
            header={
                <EditableCardHeader
                    disabled={!isMyPage}
                    editMode={editMode}
                    onClickEditIcon={() => setEditMode(true)}
                    onClickCloseIcon={() => setEditMode(false)}
                    onClickSaveIcon={onClickSaveIcon}
                />
            }
        >
            <EditableCard.NormalMode>
                <StudentProfileCardContent
                    {...defaultValues}
                    isMyPage={isMyPage}
                />
            </EditableCard.NormalMode>
            <EditableCard.EditMode>
                <StudentProfileInputCardContent
                    {...defaultValues}
                    control={control}
                />
            </EditableCard.EditMode>
        </EditableCard.EditableCard>
    );
};

export default StudentProfileCard;
