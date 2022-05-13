import { IGameBoard } from "../types/game";
import { IMarks } from "../types/marks";

export const checkGameboardRightDiagonal = (
    gameboard: IGameBoard
): IMarks | undefined => {
    const results = [];

    for (let i = gameboard.length - 1; i >= 0; i--) {
        const cellIndex = Math.abs(i - (gameboard.length - 1));

        if (!gameboard[i][cellIndex]) break;

        results.push(gameboard[i][cellIndex]);
    }

    const uniqueResults = new Set(results);

    if (results.length === 3 && uniqueResults.size === 1) {
        return Array.from(uniqueResults)[0] as IMarks;
    }
};
