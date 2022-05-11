import { createSlice } from "@reduxjs/toolkit";
import { IGameSliceState } from "../../types/game";

const initialState: IGameSliceState = {
    me: {
        mark: null,
        wins: 0,
    },
    opponent: {
        mark: null,
        wins: 0,
    },
    gameboard: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ],
    turn: null,
    draws: 0,
};

export const gameSlice = createSlice({
    name: "gameSlice",
    initialState,
    reducers: {},
});
