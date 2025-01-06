import React, { useEffect } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";
import EditableTypography, {
    EditableTypographyProps,
} from "../../components/input/EditableTypography";

const meta: Meta<typeof EditableTypography> = {
    title: "inputs/EditableTypography",
    component: EditableTypography,
    tags: ["autodocs"],
    argTypes: {
        defaultValue: { control: "text" },
        editMode: { control: "boolean" },
        name: { control: "text" },
    },
};

export default meta;

const Template: StoryFn<EditableTypographyProps> = (args) => {
    const methods = useForm();
    useEffect(() => {
        console.log(methods.getValues());
        console.log(methods.getFieldState("test"));
    }, [methods, methods.watch("test")]);

    const handleSubmit = () => {
        alert(methods.formState);
    };
    return (
        <form onSubmit={handleSubmit}>
            <EditableTypography {...args} control={methods.control} />;
            <button type="submit">Button</button>
        </form>
    );
};

export const Default = Template.bind({});
Default.args = {
    name: "test",
    editMode: false,
    defaultValue: "This is test",
};
