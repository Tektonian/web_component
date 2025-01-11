import { Meta, StoryObj } from "@storybook/react";
import LanguageCard, {
    LanguageCardProps,
} from "../../components/student/LanguageCard";

const meta: Meta<typeof LanguageCard> = {
    title: "student/LanguageCard",
    component: LanguageCard,
    argTypes: {
        level: { control: "number" },
        exam_name: { control: "text" },
        language: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<LanguageCardProps>;

export const Default: Story = {
    args: {
        level: 1,
        exam_name: "JLPT",
        language: "일본어",
    },
};

export const Toeic: Story = {
    args: {
        level: 2,
        exam_name: "토익",
        language: "영어",
    },
};
