import { checkGameboardFunctions } from "./index";
import { IGameBoard } from "../types/game";
import { IMarks } from "../types/marks";

export const checkMarkWin = (gameboard: IGameBoard, player: IMarks) => {
    checkGameboardFunctions.forEach((checkFn) => {
        const winner = checkFn(gameboard);
        if (winner === player) return true;
    });

    return false;
};
