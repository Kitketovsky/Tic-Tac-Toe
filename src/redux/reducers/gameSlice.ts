import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameBoard, IGameSliceState } from "../../types/game";
import { MARK_O, MARK_X } from "../../constants/marks";
import { IMarks } from "../../types/marks";
import { IOpponentTypes } from "../../types/opponent";
import { DRAW, ROW_LENGTH, TOTAL_GAMEBOARD_CELLS } from "../../constants/game";
import { minimax } from "../../ai/minimax";

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
    gameboard: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    turn: MARK_X,
    ties: 0,
    isStarted: false,
    isEnded: false,
    freeCells: [0, 1, 2, 3, 4, 5, 6, 7, 8],
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
        setCellValue(state, action: PayloadAction<number | null>) {
            const { gameboard, turn, me, opponent } = state;

            if (turn === opponent.mark) {
                const copyGameboard: IGameBoard = [...gameboard];

                const { index } = minimax(
                    copyGameboard,
                    opponent.mark,
                    me.mark,
                    opponent.mark
                );

                state.gameboard[index] = opponent.mark;

                state.freeCells = state.gameboard.filter(
                    (cell) => cell !== MARK_O && cell !== MARK_X
                ) as number[];
            } else {
                gameboard[action.payload!] = state.turn;

                state.freeCells = state.gameboard.filter(
                    (cell) => cell !== MARK_O && cell !== MARK_X
                ) as number[];
            }
        },
        checkWinner(state) {
            const notEnoughTurnsToWin =
                state.freeCells.length - 1 > TOTAL_GAMEBOARD_CELLS - ROW_LENGTH;

            if (state.winner || notEnoughTurnsToWin) return;

            if (!state.freeCells.length && !state.winner) {
                state.winner = DRAW;
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
    checkWinner,
} = gameSlice.actions;
