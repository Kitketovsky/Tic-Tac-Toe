import React from "react";
import { Logo } from "../../components/Logo";
import { GrayO, RestartIcon } from "../../assets/svg";
import { Button } from "../../components/Button";
import { Header, Turn } from "./styled";
import { Cell } from "./components/Cell";
import { GameInfo } from "./components/GameInfo";
import { GridTable } from "../../UI/components/GridTable";

export const GamePage = () => {
    return (
        <React.Fragment>
            <Header>
                <Logo />
                <Turn>
                    <GrayO /> Turn
                </Turn>
                <Button color="orange" content={<RestartIcon />} />
            </Header>
            <GridTable>{/*<Cell />*/}</GridTable>
            <GridTable>
                <GameInfo title="O (You)" value={0} color="darkOrange" />
                <GameInfo title="Ties" value={0} color="grey" />
                <GameInfo title="X (Cpu)" value={0} color="darkCyan" />
            </GridTable>
        </React.Fragment>
    );
};
