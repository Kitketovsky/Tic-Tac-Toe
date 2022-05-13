import { IMarks } from "./marks";
import { IOpponentTypes } from "./opponent";

export interface IPlayerInfo {
    mark: IMarks;
    wins: number;
    type?: IOpponentTypes | null;
}

export type IGameBoard = [IGameBoardRow, IGameBoardRow, IGameBoardRow];

export type IGameBoardRow = [IMarks | null, IMarks | null, IMarks | null];

export interface IGameSliceState {
    me: IPlayerInfo;
    opponent: IPlayerInfo;
    gameboard: IGameBoard;
    turn: IMarks;
    draws: number;
    isStarted: boolean;
    isEnded: boolean;
    freeCells: string[];
    winner: IMarks | null;
}

export type GameInfoColors = "darkOrange" | "darkCyan" | "grey";
