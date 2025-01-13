import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";
import CorpProfileInputCard from "../../components/input/CorpProfileInput";

const meta: Meta<typeof CorpProfileInputCard> = {
    title: "inputs/CorpProfileInput",
    component: CorpProfileInputCard,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

const Template: StoryFn = () => {
    const { control } = useForm<any>({
        defaultValues: {
            corp_name: "Tech Solutions Ltd.",
            nationality: "USA",
            ceo_name: "John Doe",
            corp_address: "123 Tech Lane, San Francisco, CA",
            biz_started_at: "2015-12-01",
            biz_type: "IT Services",
            logo_image: "https://via.placeholder.com/160",
            site_url: "https://techsolutions.com",
            isMypage: true,
            corp_domain: "techsolutions.com",
            phone_number: "123-456-7890",
            corp_num: 987654,
            biz_num: 123456,
            corp_status: "Active",
        },
    });

    return (
        <CorpProfileInputCard
            initialData={{
                corp_name: "Tech Solutions Ltd.",
                nationality: "USA",
                ceo_name: "John Doe",
                corp_address: "123 Tech Lane, San Francisco, CA",
                biz_started_at: "2015-12-01",
                biz_type: "IT Services",
                logo_image: "https://via.placeholder.com/160",
                site_url: "https://techsolutions.com",
                isMypage: true,
                corp_domain: "techsolutions.com",
                phone_number: "123-456-7890",
                corp_num: 987654,
                biz_num: 123456,
                corp_status: "Active",
            }}
            control={control}
        />
    );
};

export const Default = Template.bind({});

export const EmptyData = Template.bind({});
EmptyData.args = {
    initialData: {
        corp_name: "",
        nationality: "",
        ceo_name: "",
        corp_address: "",
        biz_started_at: "",
        biz_type: "",
        logo_image: "",
        site_url: "",
        isMypage: false,
        corp_domain: "",
        phone_number: "",
        corp_num: undefined,
        biz_num: undefined,
        corp_status: "",
    },
};
