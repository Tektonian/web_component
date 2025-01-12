import React from "react";
import { useContext, createContext, ReactNode } from "react";
import { UserEnum } from "api_spec/enum";
const userRoleContext = createContext<Set<UserEnum.USER_ROLE_ENUM>>(
    new Set([]),
);

interface ItemProps {
    children: React.ReactElement;
}
const StudentItem = (props: ItemProps) => {
    const role = useContext(userRoleContext);

    return role.has("student") ? props.children : <></>;
};

const OrgnItem = (props: ItemProps) => {
    const role = useContext(userRoleContext);

    return role.has("corp") ? props.children : <></>;
};

const NormalItem = (props: ItemProps) => {
    const role = useContext(userRoleContext);

    return role.has("normal") && role.size === 1 ? props.children : <></>;
};

const NoSessionItem = (props: ItemProps) => {
    const role = useContext(userRoleContext);

    return role.size === 0 ? props.children : <></>;
};

/**
 * Items' priorities are as follows
 * Student === Corp || Orgn > Normal > NoSession
 */

interface RoleBasedBlockerProps {
    roles?: UserEnum.USER_ROLE_ENUM[];
    children: React.ReactElement<
        | typeof NoSessionItem
        | typeof StudentItem
        | typeof OrgnItem
        | typeof NormalItem
    >[];
}
const RoleBasedBlocker = (props: RoleBasedBlockerProps) => {
    return (
        <userRoleContext.Provider value={new Set(props.roles)}>
            {props.children}
        </userRoleContext.Provider>
    );
};

export { RoleBasedBlocker, StudentItem, OrgnItem, NoSessionItem, NormalItem };

export type { RoleBasedBlockerProps, ItemProps };
