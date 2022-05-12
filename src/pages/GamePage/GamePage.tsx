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
import { changeTurn, setCellValue } from "../../redux/reducers/gameSlice";

export const GamePage = () => {
    const dispatch = useAppDispatch();

    const { gameboard, turn, freeCells } = useAppSelector(
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

    return (
        <React.Fragment>
            <Header>
                <Logo />
                <Turn>{turn === MARK_X ? <GrayX /> : <GrayO />} Turn</Turn>
                <Button color="orange" content={<RestartIcon />} />
            </Header>
            <GridTable>
                {gameboard.map((gameboardRow, rowIndex) =>
                    gameboardRow.map((mark, cellIndex) => {
                        const id = `${rowIndex}-${cellIndex}`;
                        return (
                            <Cell
                                key={id}
                                id={id}
                                mark={mark}
                                myMark={myMark}
                                turn={turn}
                            />
                        );
                    })
                )}
            </GridTable>
            <GridTable>
                <GameInfo
                    title={`${myMark} (You)`}
                    value={myWins}
                    color="darkOrange"
                />
                <GameInfo title="Ties" value={0} color="grey" />
                <GameInfo
                    title={`${opponentMark} (Cpu)`}
                    value={opponentWins}
                    color="darkCyan"
                />
            </GridTable>
        </React.Fragment>
    );
};
