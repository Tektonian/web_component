import React from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import RequestDataCard, {
    RequestDataCardProps,
} from "../../components/request/RequestDataCard";

const meta: Meta<typeof RequestDataCard> = {
    title: "request/RequestDataCard",
    component: RequestDataCard,
    tags: ["autodocs"],
    argTypes: {
        requestData: { control: "object" },
        corpProfile: { control: "object" },
    },
};

export default meta;

const Template: StoryFn<RequestDataCardProps> = (args) => (
    <RequestDataCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    requestData: {
        title: "Sample Request Title",
        content:
            "This is a detailed description of the request. It includes all necessary information for understanding.",
        address: "123 Sample Street, Sample City",
        address_coordinate: {
            type: "Point",
            coordinates: [37.7749, -122.4194],
        },
        prep_material: [],
        request_status: 1,
        created_at: new Date("2023-01-01T12:00:00Z"),
        updated_at: new Date("2023-01-02T12:00:00Z"),
    },
    corpProfile: {
        corp_name: "Sample Corporation",
        nationality: "US",
        ceo_name: "John Doe",
        corp_address: "456 Corporate Blvd, Corporate City",
        biz_started_at: "2020-01-01",
        biz_type: "Technology",
        logo_image: "https://via.placeholder.com/50",
        site_url: "https://example.com",
        past_requests: [
            {
                title: "Past Request 1",
                subtitle: "This is a subtitle for past request 1.",
                reward_price: 100,
                currency: "US",
                address: "789 Past Request Lane, Past City",
                start_date: new Date("2022-01-01T12:00:00Z"),
                renderLogo: false,
                onClick: () => alert("Clicked Past Request 1"),
            },
            {
                title: "Past Request 2",
                subtitle: "This is a subtitle for past request 2.",
                reward_price: 200,
                currency: "US",
                address: "789 Past Request Lane, Past City",
                start_date: new Date("2022-06-01T12:00:00Z"),
                renderLogo: false,
                logo_image: "https://via.placeholder.com/50",
                onClick: () => alert("Clicked Past Request 2"),
            },
        ],
    },
};

export const WithLogo: StoryObj<RequestDataCardProps> = {
    args: {
        requestData: {
            title: "TOPIK 시험감독관 및 관리요원 모집",
            content:
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Mi platea mus laoreet porta; vulputate at purus volutpat? Accumsan porta eros id, velit curabitur ut volutpat. Nisl varius dui arcu nam curae nec? Rhoncus ut turpis habitant vel primis ex dignissim. Nostra gravida auctor habitant elit ornare ridiculus. Elit at ligula euismod consectetur porttitor hendrerit. Lacinia adipiscing curabitur duis rutrum laoreet nulla fringilla urna.\nTempus in aptent; dictum augue placerat curabitur. Sed nam posuere sagittis nam tempor odio purus magna. Nascetur odio orci a aptent id nec orci. Malesuada senectus euismod sed potenti sociosqu. Hendrerit est suspendisse odio quisque egestas, elementum quisque elit. Ipsum eget nostra tempor pellentesque nostra maecenas augue laoreet commodo\nVivamus integer mattis congue euismod duis lectus. Pulvinar in eu a sem nascetur a. Vulputate ac semper ac nostra ridiculus est mollis. Euismod amet duis est aliquet commodo non cursus. Metus non luctus tortor dapibus accumsan consequat gravida hendrerit. Urna penatibus odio condimentum tristique cubilia porttitor mollis pulvinar. Fusce mauris praesent purus auctor habitasse. Lectus vivamus commodo fermentum congue penatibus.",
            address: "서울특별시 강남구",
            address_coordinate: {
                type: "Point",
                coordinates: [37.5665, 126.978],
            },
            prep_material: [
                "Personal laptop and charger",
                "Writing tools (pen, notebook, etc.)",
                "Portfolio relevant to the job",
                "Government-issued ID for verification",
                "Diary or notebook to track work progress",
            ],
            request_status: 1,
            are_needed: [
                "Basic computer proficiency (MS Office, Google Workspace)",
                "Strong team communication and collaboration skills",
                "Experience in creating and managing project documentation",
                "Minimum 1 year of relevant work experience",
                "Analytical and problem-solving skills",
            ],
            are_required: [
                "Proficiency in a foreign language (e.g., English or Japanese)",
                "Holds relevant certifications (e.g., PMP, ITIL, Adobe Certified)",
                "Experience in startups or similar industries",
                "Managed large-scale projects in the past",
                "Excellent presentation and public speaking skills",
            ],
            created_at: new Date("2023-07-01T12:00:00Z"),
            updated_at: new Date("2023-07-02T12:00:00Z"),
        },
        corpProfile: {
            corp_name: "TOPIK Center",
            nationality: "KO",
            ceo_name: "Kim Hyunwoo",
            corp_address: "서울특별시 종로구",
            biz_started_at: "2010-03-15",
            biz_type: "Education",
            logo_image:
                "https://upload.wikimedia.org/wikipedia/commons/1/19/Vulfpeck_Logo.jpg",
            site_url: "https://topik.go.kr",
            past_requests: [
                {
                    title: "TOPIK Event 2023",
                    reward_price: 300,
                    currency: "KO",
                    address: "대전광역시",
                    start_date: new Date("2023-03-15T12:00:00Z"),
                    renderLogo: false,
                    logo_image: "https://via.placeholder.com/50",
                    onClick: () => alert("Clicked TOPIK Event 2023"),
                    request_status: 3,
                },
            ],
        },
    },
};
