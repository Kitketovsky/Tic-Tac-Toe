import { IGameBoard } from "../types/game";
import { IMarks } from "../types/marks";
import { checkIfMarkWon } from "../utils/checkIfMarkWon";
import { MARK_O, MARK_X } from "../constants/marks";

interface IMove {
    index: number;
    score: number;
}

export const minimax = (
    gameboard: IGameBoard,
    player: IMarks,
    playerMark: IMarks,
    opponentMark: IMarks
) => {
    // @ts-ignore
    const availableCells = gameboard.filter(
        (cell) => cell != MARK_O && cell != MARK_X
    );

    if (checkIfMarkWon(gameboard, playerMark)) {
        return { score: -10 };
    } else if (checkIfMarkWon(gameboard, opponentMark)) {
        return { score: 10 };
    } else if (availableCells.length === 0) {
        return { score: 0 };
    }

    const moves: any = [];

    for (let i = 0; i < availableCells.length; i++) {
        const move: Partial<IMove> = {};

        move.index = gameboard[availableCells[i] as number] as number;

        gameboard[availableCells[i] as number] = player;

        if (player === opponentMark) {
            const result = minimax(
                gameboard,
                playerMark,
                playerMark,
                opponentMark
            );

            move.score = result.score;
        } else {
            const result = minimax(
                gameboard,
                opponentMark,
                playerMark,
                opponentMark
            );

            move.score = result.score;
        }
        gameboard[availableCells[i] as number] = move.index;
        moves.push(move);
    }

    let bestMove: number | undefined = undefined;

    if (player === opponentMark) {
        let bestScore = -Infinity;

        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score as number;
                bestMove = i;
            }
        }
    } else {
        let bestScore = Infinity;

        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score as number;
                bestMove = i;
            }
        }
    }

    return moves[bestMove as number];
};
