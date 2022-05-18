import { IMarks } from "./marks";
import { IOpponentTypes } from "./opponent";
import { DRAW } from "../constants/game";

export interface IPlayerInfo {
    mark: IMarks;
    wins: number;
    type?: IOpponentTypes | null;
}

export type IGameBoard = (number | IMarks)[];

export interface IGameSliceState {
    me: IPlayerInfo;
    opponent: IPlayerInfo;
    gameboard: IGameBoard;
    turn: IMarks;
    ties: number;
    isStarted: boolean;
    isEnded: boolean;
    freeCells: number[];
    winner: IMarks | IDraw | null;
}

export type GameInfoColors = "darkOrange" | "darkCyan" | "darkGray";

export type IDraw = typeof DRAW;
