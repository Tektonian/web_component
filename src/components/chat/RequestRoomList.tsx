import React, { useState } from "react";
import { List } from "@mui/material";
import RequestRoom, { RequestRoomProps } from "./RequestRoom";

const reqs = [
    {
        title: "req 1",
        start_date: new Date(),
        image: "https://via.placeholder.com/40",
    },
    {
        title: "req 2",
        start_date: new Date(),
        image: "https://via.placeholder.com/40",
    },
    {
        title: "req 3",
        start_date: new Date(),
        image: "https://via.placeholder.com/40",
    },
];

const RequestRoomList = () => {
    return (
        <List disablePadding style={{ width: 90, backgroundColor: "#f9f9f9" }}>
            {reqs.map((req, index) => (
                <RequestRoom
                    key={index}
                    title={req.title}
                    image={req.image}
                    onClick={() => console.log(`Clicked on ${req.title}`)}
                />
            ))}
        </List>
    );
};

export default RequestRoomList;
