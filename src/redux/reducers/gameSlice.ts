import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameSliceState } from "../../types/game";
import { MARK_O, MARK_X } from "../../constants/marks";
import { IMarks } from "../../types/marks";
import { IOpponentTypes } from "../../types/opponent";

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
    draws: 0,
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
                mark: IMarks;
                rowIndex: string;
                cellIndex: string;
            }>
        ) {
            const { mark, rowIndex, cellIndex } = action.payload;

            state.gameboard[Number(rowIndex)][Number(cellIndex)] = mark;

            state.freeCells = state.freeCells.filter(
                (cell) => cell !== `${rowIndex}-${cellIndex}`
            );
        },
        checkRows(state) {
            if (state.winner) return;

            for (let row of state.gameboard) {
                const uniqueRowValues = new Set(row);
                if (uniqueRowValues.size === 1 && row.every(Boolean)) {
                    state.winner = Array.from(uniqueRowValues)[0];
                }
            }
        },
        checkColumns(state) {
            if (state.winner) return;

            for (let i = 0; i < state.gameboard.length; i++) {
                const columnValues = [];

                for (let j = 0; j < state.gameboard.length; j++) {
                    if (!state.gameboard[j][i]) break;
                    columnValues.push(state.gameboard[j][i]);
                }

                const uniqueColumnValues = new Set(columnValues);

                if (
                    columnValues.length === 3 &&
                    uniqueColumnValues.size === 1
                ) {
                    state.winner = Array.from(uniqueColumnValues)[0] as IMarks;
                }
            }
        },
        checkFirstDiagonal(state) {
            if (state.winner) return;

            const diagonalResults = [];

            for (let i = 0; i < state.gameboard.length; i++) {
                if (!state.gameboard[i][i]) break;
                diagonalResults.push(state.gameboard[i][i]);
            }

            const uniqueDiagonalResults = new Set(diagonalResults);

            if (
                diagonalResults.length === 3 &&
                uniqueDiagonalResults.size === 1
            ) {
                state.winner = Array.from(uniqueDiagonalResults)[0] as IMarks;
            }
        },
        checkSecondDiagonal(state) {
            if (state.winner) return;

            const results = [];

            for (let i = state.gameboard.length - 1; i >= 0; i--) {
                const cellIndex = Math.abs(i - (state.gameboard.length - 1));

                if (!state.gameboard[i][cellIndex]) break;

                results.push(state.gameboard[i][cellIndex]);
            }

            const unique = new Set(results);

            if (results.length === 3 && unique.size === 1) {
                state.winner = Array.from(unique)[0] as IMarks;
            }
        },
    },
});

export const {
    setPlayersMarks,
    setOpponent,
    startNewGame,
    changeTurn,
    setCellValue,
    checkRows,
    checkColumns,
    checkFirstDiagonal,
    checkSecondDiagonal,
} = gameSlice.actions;
