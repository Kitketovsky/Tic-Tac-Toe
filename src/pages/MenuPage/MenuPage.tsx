import React from "react";
import { Logo } from "../../components/Logo";
import { MenuOptions } from "./components/MenuOptions";
import { MenuActions } from "./components/MenuActions";

export const MenuPage = () => {
    return (
        <React.Fragment>
            <Logo />
            <MenuOptions />
            <MenuActions />
        </React.Fragment>
    );
};
