import React from "react";
import { Logo } from "../../components/Logo";
import { MenuOptions } from "./components/MenuOptions";
import { MenuActions } from "./components/MenuActions";
import { ContentWrapper } from "../../UI/components/ContentWrapper";

export const MenuPage = () => {
    return (
        <ContentWrapper>
            <Logo />
            <MenuOptions />
            <MenuActions />
        </ContentWrapper>
    );
};
