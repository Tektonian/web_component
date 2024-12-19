import React, { useState } from 'react';
import { List } from "@mui/material";
import RequestRoom, { RequestRoomProps } from './RequestRoom';

const reqs = [
    {
        title: "req 1",
        start_date: new Date(),
        logo_image: "https://via.placeholder.com/40",
    },
    {
        title: "req 2",
        start_date: new Date(),
        logo_image: "https://via.placeholder.com/40",
    },
    {
        title: "req 3",
        start_date: new Date(),
        logo_image: "https://via.placeholder.com/40",
    },
];

const RequestRoomList = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <List
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ width: '100%', maxWidth: 360, backgroundColor: '#f9f9f9', padding: "12px" }}
        >
            {reqs.map((req, index) => (
                <RequestRoom
                    key={index}
                    title={req.title}
                    start_date={req.start_date}
                    logo_image={req.logo_image}
                    isHover={hoveredIndex === index}
                    onClick={() => console.log(`Clicked on ${req.title}`)}
                />
            ))}
        </List>
    );
};

export default RequestRoomList;
