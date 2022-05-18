import { IGameBoard } from "../types/game";
import { MARK_O, MARK_X } from "../constants/marks";

export const getAvailableCells = (gameboard: IGameBoard) => {
    return gameboard.filter((cell) => cell !== MARK_X && cell !== MARK_O);
};
