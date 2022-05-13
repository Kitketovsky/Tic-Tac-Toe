import { IGameBoard } from "../types/game";
import { IMarks } from "../types/marks";

export const checkGameboardRows = (
    gameboard: IGameBoard
): IMarks | undefined => {
    for (let row of gameboard) {
        const uniqueRowValues = new Set(row);

        if (uniqueRowValues.size === 1 && row.every(Boolean)) {
            return Array.from(uniqueRowValues)[0] as IMarks;
        }
    }
};
