import React, { useEffect } from "react";
import { Logo } from "../../components/Logo";
import { GrayO, GrayX, RestartIcon } from "../../assets/svg";
import { Button } from "../../components/Button";
import { Header, Turn } from "./styled";
import { Cell } from "./components/Cell/Cell";
import { GameInfo } from "./components/GameInfo/GameInfo";
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
        <React.Fragment>
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
            {winner && (
                <Results
                    myMark={myMark}
                    winner={winner}
                    opponentMark={opponentMark}
                />
            )}
        </React.Fragment>
    );
};
