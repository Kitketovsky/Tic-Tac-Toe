import { IMarks } from "../types/marks";
import { IGameBoard } from "../types/game";

export const checkGameboardColumn = (
    gameboard: IGameBoard
): IMarks | undefined => {
    for (let i = 0; i < gameboard.length; i++) {
        const columnValues = [];

        for (let j = 0; j < gameboard.length; j++) {
            if (!gameboard[j][i]) break;

            columnValues.push(gameboard[j][i]);
        }

        const uniqueColumnValues = new Set(columnValues);

        if (columnValues.length === 3 && uniqueColumnValues.size === 1) {
            return Array.from(uniqueColumnValues)[0] as IMarks;
        }
    }
};
