import React from "react";
import StudentProfileInputCardContent from "./StudentCardContent/StudentProfileInputCardContent";
import * as EditableCard from "../../input/EditableCard";
import EditableCardHeader from "../../input/EditableCardHeader";
import "@fontsource/noto-sans-kr";

import type { APIType } from "api_spec";
import type { Control } from "react-hook-form";

interface StudentInputCardProps
    extends Omit<APIType.StudentType.StudentProfileData<true>, "student_id"> {
    control: Control<
        Omit<APIType.StudentType.StudentProfileData<true>, "student_id">
    >;
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
