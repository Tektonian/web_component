import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import InputBox from "../../components/chat/InputBox";

const meta = {
    title: "ChatComponent/InputBox",
    component: InputBox,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        onChange: (e) => console.log(e.target.value),
        onSend: (e) => {
            console.log("Send");
        },
        placeholder: "type here",
        disabled: false,
    },
} satisfies Meta<typeof InputBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
