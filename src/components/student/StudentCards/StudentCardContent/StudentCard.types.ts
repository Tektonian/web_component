export interface StudentProfileData {
    name_glb: {
        [countryCode: string]: string;
    };
    nationality: string;
    birth_date: string;
    phone_number?: string;
    emergency_contact?: string;
    gender: number;
    image: string;
    has_car: 0 | 1;
    keyword_list: string[];
}

export interface StudentMyPageProfileData extends StudentProfileData {
    phone_number?: string;
    emergency_contact?: string;
}
