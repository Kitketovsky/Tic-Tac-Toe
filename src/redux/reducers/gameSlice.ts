import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameSliceState } from "../../types/game";
import { MARK_O, MARK_X } from "../../constants/marks";
import { IMarks } from "../../types/marks";
import { IOpponentTypes } from "../../types/opponent";
import { checkGameboardFunctions } from "../../utils";
import { ROW_LENGTH, TOTAL_GAMEBOARD_CELLS } from "../../constants/game";

const initialState: IGameSliceState = {
    me: {
        mark: MARK_X,
        wins: 0,
    },
    opponent: {
        mark: MARK_O,
        wins: 0,
        type: null,
    },
    gameboard: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ],
    turn: MARK_X,
    ties: 0,
    isStarted: false,
    isEnded: false,
    freeCells: ["0-0", "0-1", "0-2", "1-0", "1-1", "1-2", "2-0", "2-1", "2-2"],
    winner: null,
};

export const gameSlice = createSlice({
    name: "gameSlice",
    initialState,
    reducers: {
        setPlayersMarks(state, action: PayloadAction<{ mark: IMarks }>) {
            const { mark } = action.payload;
            state.me.mark = mark === MARK_X ? MARK_X : MARK_O;
            state.opponent.mark = mark === MARK_X ? MARK_O : MARK_X;
        },
        setOpponent(
            state,
            action: PayloadAction<{ opponent: IOpponentTypes }>
        ) {
            state.opponent.type = action.payload.opponent;
        },
        startNewGame(state) {
            state.isStarted = true;
        },
        changeTurn(state) {
            state.turn = state.turn === MARK_X ? MARK_O : MARK_X;
        },
        setCellValue(
            state,
            action: PayloadAction<{
                rowIndex: string;
                cellIndex: string;
            }>
        ) {
            const { rowIndex, cellIndex } = action.payload;

            state.gameboard[Number(rowIndex)][Number(cellIndex)] = state.turn;

            state.freeCells = state.freeCells.filter(
                (cell) => cell !== `${rowIndex}-${cellIndex}`
            );
        },
        checkWinner(state) {
            const notEnoughTurnsToWin =
                state.freeCells.length - 1 > TOTAL_GAMEBOARD_CELLS - ROW_LENGTH;

            if (state.winner || notEnoughTurnsToWin) return;
            checkGameboardFunctions.forEach((checkFn) => {
                const winner = checkFn(state.gameboard);
                if (winner) state.winner = winner;
            });
        },
    },
});

export const {
    setPlayersMarks,
    setOpponent,
    startNewGame,
    changeTurn,
    setCellValue,
    checkWinner,
} = gameSlice.actions;
