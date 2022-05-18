import { IGameBoard } from "../types/game";
import { IMarks } from "../types/marks";

export const checkIfMarkWon = (gameboard: IGameBoard, player: IMarks) => {
    if (
        (gameboard[0] == player &&
            gameboard[1] == player &&
            gameboard[2] == player) ||
        (gameboard[3] == player &&
            gameboard[4] == player &&
            gameboard[5] == player) ||
        (gameboard[6] == player &&
            gameboard[7] == player &&
            gameboard[8] == player) ||
        (gameboard[0] == player &&
            gameboard[3] == player &&
            gameboard[6] == player) ||
        (gameboard[1] == player &&
            gameboard[4] == player &&
            gameboard[7] == player) ||
        (gameboard[2] == player &&
            gameboard[5] == player &&
            gameboard[8] == player) ||
        (gameboard[0] == player &&
            gameboard[4] == player &&
            gameboard[8] == player) ||
        (gameboard[2] == player &&
            gameboard[4] == player &&
            gameboard[6] == player)
    ) {
        return true;
    } else {
        return false;
    }
};
