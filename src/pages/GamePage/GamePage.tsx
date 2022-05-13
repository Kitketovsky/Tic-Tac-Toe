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
import { makesRandomizeTurn } from "../../ai/randomizedAI";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import {
    changeTurn,
    setCellValue,
    checkWinner,
} from "../../redux/reducers/gameSlice";

export const GamePage = () => {
    const dispatch = useAppDispatch();

    const { gameboard, turn, freeCells, winner } = useAppSelector(
        (state) => state.game
    );

    const { mark: myMark, wins: myWins } = useAppSelector(
        (state) => state.game.me
    );
    const { mark: opponentMark, wins: opponentWins } = useAppSelector(
        (state) => state.game.opponent
    );

    useEffect(() => {
        if (!freeCells.length) return;

        if (turn === opponentMark) {
            const { rowIndex, cellIndex } = makesRandomizeTurn(freeCells);

            dispatch(setCellValue({ cellIndex, rowIndex, mark: opponentMark }));
            dispatch(changeTurn());
        }
    }, [turn]);

    useEffect(() => {
        dispatch(checkWinner());
    }, [turn]);

    const cells = gameboard.map((gameboardRow, rowIndex) =>
        gameboardRow.map((mark, cellIndex) => {
            const id = `${rowIndex}-${cellIndex}`;
            return (
                <Cell
                    key={id}
                    id={id}
                    mark={mark}
                    myMark={myMark}
                    turn={turn}
                    freeCells={freeCells}
                />
            );
        })
    );

    const turnMarkIcon = turn === MARK_X ? <GrayX /> : <GrayO />;

    const myInfoTitle = `${myMark} (You)`;

    const opponentInfoTitle = `${opponentMark} (Cpu)`;

    return (
        <React.Fragment>
            <Header>
                <Logo />
                <Turn>{turnMarkIcon} Turn</Turn>
                <Button color="orange" content={<RestartIcon />} />
            </Header>
            <GridTable>{cells}</GridTable>
            <GridTable>
                <GameInfo
                    title={myInfoTitle}
                    value={myWins}
                    color="darkOrange"
                />
                <GameInfo title="Ties" value={0} color="grey" />
                <GameInfo
                    title={opponentInfoTitle}
                    value={opponentWins}
                    color="darkCyan"
                />
            </GridTable>
        </React.Fragment>
    );
};
