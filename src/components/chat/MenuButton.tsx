import React, { ButtonHTMLAttributes } from "react";
import { IconButton, Divider, Menu, MenuItem } from "@mui/material";

interface IMenuContext {
    handleClose: () => void;
}
const MenuContext = React.createContext<IMenuContext | null>(null);

interface MenuButtonItemProps {
    children: React.ReactElement;
}
const MenuButtonItem = (props: MenuButtonItemProps) => {
    return <MenuItem>{props.children}</MenuItem>;
};

const MenuButtonItemWithClose = (props: MenuButtonItemProps) => {
    const context = React.useContext(MenuContext);

    if (!context) {
        throw new Error("MyConsumer must be used within a MyProvider");
    }

    const { handleClose } = context;

    return <MenuItem onClick={handleClose}>{props.children}</MenuItem>;
};

const MenuButtonDivider = () => {
    return <Divider sx={{ my: 0.5 }} />;
};

interface MenuButtonProps {
    label?: string;
    trigger: JSX.Element;
    children:
        | React.ReactElement<MenuButtonItemProps>[]
        | React.ReactElement<MenuButtonItemProps>
        | React.ReactElement<HTMLButtonElement>[]
        | React.ReactElement<HTMLButtonElement>
        | React.ReactElement<typeof MenuButtonDivider>
        | React.ReactNode;
}
const MenuButton = (props: MenuButtonProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MenuContext.Provider value={{ handleClose }}>
            <IconButton
                id="chat-header-button"
                aria-controls={open ? "chat-header-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                aria-label="menu"
                onClick={handleOpen}
                color="inherit"
            >
                {props.trigger}
            </IconButton>
            <Menu
                id="chat-header-menu"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                elevation={0}
                anchorOrigin={{
                    vertical: "center",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                MenuListProps={{
                    "aria-labelledby": "chat-header-button",
                }}
            >
                {props.children}
            </Menu>
        </MenuContext.Provider>
    );
};

export {
    MenuButton,
    MenuButtonItem as Item,
    MenuButtonItemWithClose as ItemWithClose,
    MenuButtonDivider as Divider,
};
export type { MenuButtonItemProps, MenuButtonProps };
