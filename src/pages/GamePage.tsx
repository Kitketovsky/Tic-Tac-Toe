import React from "react";
import styled from "styled-components";
import { Logo } from "../components/Logo";
import { GrayO, RestartIcon } from "../assets/svg";
import { Button } from "../components/Button";
import { colors } from "../UI/colors";
import { Cell } from "../components/Cell";
import { GameInfo } from "../components/GameInfo";

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    button {
        width: max-content;
        border-radius: 10px;
    }
`;

const Turn = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding: 0 1.5rem;
    height: 3.5rem;
    text-transform: uppercase;
    color: ${colors.darkTheme.grey};
    font-weight: bold;
    letter-spacing: 1px;
    background-color: ${colors.darkTheme.darkBlue};
    border-radius: 10px;
    border-bottom: 4px solid ${colors.darkTheme.shadowBlue};

    svg {
        width: 1.5rem;
    }
`;

const ThreeColumnGrid = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    width: 100%;
    justify-items: center;
`;

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
            <ThreeColumnGrid>
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </ThreeColumnGrid>
            <ThreeColumnGrid>
                <GameInfo title="O (You)" value={0} color="darkOrange" />
                <GameInfo title="Ties" value={0} color="grey" />
                <GameInfo title="X (Cpu)" value={0} color="darkCyan" />
            </ThreeColumnGrid>
        </React.Fragment>
    );
};
