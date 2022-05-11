import { IMarks } from "./marks";

export interface IPlayerInfo {
    mark: IMarks | null;
    wins: number;
}

export type IGameBoard = [IGameBoardRow, IGameBoardRow, IGameBoardRow];

export type IGameBoardRow = [IMarks | null, IMarks | null, IMarks | null];

export interface IGameSliceState {
    me: IPlayerInfo;
    opponent: IPlayerInfo;
    gameboard: IGameBoard;
    turn: IMarks | null;
    draws: number;
}
