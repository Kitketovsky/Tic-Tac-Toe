import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameBoard, IGameSliceState } from "../../types/game";
import { MARK_O, MARK_X } from "../../constants/marks";
import { IMarks } from "../../types/marks";
import { IOpponentTypes } from "../../types/opponent";
import { DRAW, ROW_LENGTH, TOTAL_GAMEBOARD_CELLS } from "../../constants/game";
import { minimax } from "../../ai/minimax";
import { checkIfMarkWon } from "../../utils/checkIfMarkWon";
import { getAvailableCells } from "../../utils/getAvailableCells";

const initialBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

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
    gameboard: initialBoard,
    turn: MARK_X,
    ties: 0,
    isStarted: false,
    isEnded: false,
    freeCells: initialBoard,
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
        playNextRound(state) {
            state.gameboard = initialBoard;
            state.freeCells = initialBoard;
            state.winner = null;
            state.turn = MARK_X;
        },
        resetGame(state) {
            state.gameboard = initialBoard;
            state.freeCells = initialBoard;
            state.winner = null;
            state.opponent.wins = 0;
            state.me.wins = 0;
            state.ties = 0;
            state.turn = MARK_X;
        },
        setCellValue(state, action: PayloadAction<number | null>) {
            const { gameboard, turn, me, opponent, freeCells } = state;

            if (freeCells.length) {
                if (turn === opponent.mark) {
                    const copyGameboard: IGameBoard = [...gameboard];

                    const { index } = minimax(
                        copyGameboard,
                        opponent.mark,
                        me.mark,
                        opponent.mark
                    );

                    gameboard[index] = opponent.mark;
                } else {
                    gameboard[action.payload!] = turn;
                }

                state.freeCells = getAvailableCells(
                    state.gameboard
                ) as number[];
            }
        },
        checkWinner(state) {
            const { freeCells, gameboard, me, opponent } = state;

            const notEnoughTurnsToWin =
                freeCells.length - 1 > TOTAL_GAMEBOARD_CELLS - ROW_LENGTH;

            if (state.winner || notEnoughTurnsToWin) return;

            if (checkIfMarkWon(gameboard, me.mark)) {
                state.winner = me.mark;
                state.me.wins++;
            }

            if (checkIfMarkWon(gameboard, opponent.mark)) {
                state.winner = opponent.mark;
                state.opponent.wins++;
            }

            if (!freeCells.length) {
                state.winner = DRAW;
                state.ties++;
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
    playNextRound,
    resetGame,
} = gameSlice.actions;
