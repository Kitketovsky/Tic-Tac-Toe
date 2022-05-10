import React from "react";
import { Logo } from "../components/Logo";
import { NewGameOptions } from "../components/NewGameOptions";
import { NewGameActionButtons } from "../components/NewGameActionButtons";

export const MainMenu = () => {
    return (
        <React.Fragment>
            <Logo />
            <NewGameOptions />
            <NewGameActionButtons />
        </React.Fragment>
    );
};
