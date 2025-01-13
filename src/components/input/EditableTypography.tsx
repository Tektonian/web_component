import React, { useState, useEffect } from "react";
import { useController } from "react-hook-form";

import { Typography, TextField } from "@mui/material";

import type { Control } from "react-hook-form";
import type { TypographyProps, TextFieldProps } from "@mui/material";

export interface EditableTypographyProps {
    defaultValue: string;
    editMode: boolean;
    control: Control;
    typographyProps: TypographyProps;
    textFieldProps: TextFieldProps;
    name: string;
}

const EditableTypography = ({
    defaultValue = "",
    editMode = false,
    control,
    typographyProps,
    textFieldProps,
    name,
}: EditableTypographyProps) => {
    const {
        field,
        fieldState: { invalid, isTouched, isDirty },
        formState: { touchedFields, dirtyFields },
    } = useController({
        name: name,
        defaultValue: defaultValue,
        control: control,
        rules: { required: true },
    });

    return editMode === false ? (
        <Typography {...typographyProps}>{field.value}</Typography>
    ) : (
        <TextField
            {...textFieldProps}
            onChange={field.onChange} // send value to hook form
            onBlur={field.onBlur} // notify when input is touched/blur
            value={field.value} // input value
            name={field.name} // send down the input name
            inputRef={field.ref} // send input ref, so we can focus on input when error appear
        />
    );
};

export default EditableTypography;
