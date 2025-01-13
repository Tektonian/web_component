import "@fontsource/noto-sans-kr";
import React from "react";
import { Control } from "react-hook-form";
import * as EditableCard from "../input/EditableCard";
import CorporationInputCardContent from "./CorporationCardContent/CorporationInputCardContent";

import { APIType } from "api_spec";

interface CorpProfileInputProps extends APIType.CorporationType.CorpCardData {
    control: Control<APIType.CorporationType.CorpCardData>;
}

const CorpProfileInput: React.FC<CorpProfileInputProps> = ({
    control,
    ...defaultValues
}) => {
    return (
        <EditableCard.EditableCard editMode={true}>
            <EditableCard.EditMode>
                <CorporationInputCardContent
                    control={control}
                    {...defaultValues}
                />
            </EditableCard.EditMode>
        </EditableCard.EditableCard>
    );
};

export default CorpProfileInput;
