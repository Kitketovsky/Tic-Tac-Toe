import React, { useEffect } from "react";
import { Logo } from "../../components/Logo";
import { GrayO, GrayX, RestartIcon } from "../../assets/svg";
import { Button } from "../../components/Button";
import { Cell } from "./components/Cell";
import { GameInfo } from "./components/GameInfo";
import { GridTable } from "../../UI/components/GridTable";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { MARK_X } from "../../constants/marks";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import {
    changeTurn,
    setCellValue,
    checkWinner,
    resetGame,
} from "../../redux/reducers/gameSlice";
import { Results } from "../../components/Results";
import { ContentWrapper } from "../../UI/components/ContentWrapper";
import { AnimatePresence } from "framer-motion";

import styled from "styled-components";
import { colors } from "../../UI/colors";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    button {
        width: max-content;
        border-radius: 10px;
    }
`;

export const Turn = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding: 0 1.5rem;
    height: 3.5rem;
    text-transform: uppercase;
    color: ${colors.darkTheme.gray};
    font-weight: bold;
    letter-spacing: 1px;
    background-color: ${colors.darkTheme.darkBlue};
    border-radius: 10px;
    border-bottom: 4px solid ${colors.darkTheme.shadowBlue};

    svg {
        width: 1.5rem;
    }
`;

export const GamePage = () => {
    const dispatch = useAppDispatch();

    const { gameboard, turn, winner, freeCells, ties } = useAppSelector(
        (state) => state.game
    );

    const { mark: myMark, wins: myWins } = useAppSelector(
        (state) => state.game.me
    );
    const { mark: opponentMark, wins: opponentWins } = useAppSelector(
        (state) => state.game.opponent
    );

    useEffect(() => {
        if (turn === opponentMark) {
            dispatch(setCellValue(null));
            if (freeCells.length) dispatch(changeTurn());
        }
    }, [turn]);

    useEffect(() => {
        dispatch(checkWinner());
    }, [turn]);

    const cells = gameboard.map((mark, arrayIndex) => {
        return (
            <Cell
                key={arrayIndex}
                id={arrayIndex}
                mark={mark}
                myMark={myMark}
                turn={turn}
                freeCells={freeCells}
            />
        );
    });

    const turnMarkIcon = turn === MARK_X ? <GrayX /> : <GrayO />;

    const myInfoTitle = `${myMark} (You)`;

    const opponentInfoTitle = `${opponentMark} (Cpu)`;

    const restartGameWithoutQuittingHandler = () => {
        dispatch(resetGame());
    };

    return (
        <ContentWrapper>
            <Header>
                <Logo />
                <Turn>{turnMarkIcon} Turn</Turn>
                <Button
                    color="orange"
                    content={<RestartIcon />}
                    onClick={restartGameWithoutQuittingHandler}
                />
            </Header>
            <GridTable width={100} even>
                {cells}
            </GridTable>
            <GridTable width={100} even>
                <GameInfo
                    title={myInfoTitle}
                    value={myWins}
                    color="darkOrange"
                />
                <GameInfo title="Ties" value={ties} color="darkGray" />
                <GameInfo
                    title={opponentInfoTitle}
                    value={opponentWins}
                    color="darkCyan"
                />
            </GridTable>
            <AnimatePresence exitBeforeEnter>
                {winner && (
                    <Results
                        myMark={myMark}
                        winner={winner}
                        opponentMark={opponentMark}
                    />
                )}
            </AnimatePresence>
        </ContentWrapper>
    );
};
