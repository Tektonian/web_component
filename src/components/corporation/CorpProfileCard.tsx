import "@fontsource/noto-sans-kr";
import { APIType } from "api_spec";
import React from "react";
import * as EditableCard from "../input/EditableCard";
import CorporationCardContent from "./CorporationCardContent/CorporationCardContent";

export interface CorpProfileCardProps
    extends APIType.CorporationType.CorpCardData {
    onClick?: React.MouseEventHandler;
}

const CorpProfileCard = ({
    onClick,
    ...defaultValues
}: CorpProfileCardProps) => {
    return (
        <EditableCard.EditableCard>
            <EditableCard.NormalMode>
                <CorporationCardContent {...defaultValues} />
            </EditableCard.NormalMode>
        </EditableCard.EditableCard>
    );
};

export default CorpProfileCard;
