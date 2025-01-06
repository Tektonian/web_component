import React from "react";

import { Button } from "./Button";
import "./header.css";

type User = {
    name: string;
};

export interface HeaderProps {
    user?: User;
    onProfile?: () => void;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
    onStudents?: () => void;
    onRequests?: () => void;
}

export const Header = ({
    user,
    onLogin,
    onProfile,
    onLogout,
    onCreateAccount,
    onStudents,
    onRequests,
}: HeaderProps) => (
    <header>
        <div className="storybook-header">
            <div>
                <h1>Tektonian</h1>
                <Button size="small" onClick={onStudents} label="Students" />
                <Button size="small" onClick={onRequests} label="Requests" />
            </div>
            <div>
                {user ? (
                    <>
                        <span className="welcome">
                            Welcome, <b>{user.name}</b>!
                        </span>
                        <Button
                            size="small"
                            onClick={onProfile}
                            label="Profile"
                        />
                        <Button
                            primary
                            backgroundColor="#d33f3f"
                            size="small"
                            onClick={onLogout}
                            label="Log out"
                        />
                    </>
                ) : (
                    <>
                        <Button size="small" onClick={onLogin} label="Log in" />
                        <Button
                            primary
                            size="small"
                            onClick={onCreateAccount}
                            label="Sign up"
                        />
                    </>
                )}
            </div>
        </div>
    </header>
);
