import { IMarks } from "../types/marks";
import { IGameBoard } from "../types/game";

export const checkGameboardLeftDiagonal = (
    gameboard: IGameBoard
): IMarks | undefined => {
    const diagonalResults = [];

    for (let i = 0; i < gameboard.length; i++) {
        if (!gameboard[i][i]) break;
        diagonalResults.push(gameboard[i][i]);
    }

    const uniqueDiagonalResults = new Set(diagonalResults);

    if (diagonalResults.length === 3 && uniqueDiagonalResults.size === 1) {
        return Array.from(uniqueDiagonalResults)[0] as IMarks;
    }
};
