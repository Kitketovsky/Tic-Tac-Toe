import { IGameBoard } from "../types/game";
import { IMarks } from "../types/marks";
import { checkMarkWin } from "../utils/checkMarkWin";

export const minimax = (
    gameboard: IGameBoard,
    player: IMarks,
    freeCells: string[],
    playerMark: IMarks,
    opponentMark: IMarks
) => {
    if (checkMarkWin(gameboard, playerMark)) {
        return { score: -10 };
    } else if (checkMarkWin(gameboard, opponentMark)) {
        console.log("AI WON");
        return { score: 10 };
    } else if (freeCells.length === 0) {
        return { score: 0 };
    }

    const moves: any = [];

    // FIXME: ни один move не пушится в moves
    // FIXME: бесконечный вызов

    for (let i = 0; i < freeCells.length; i++) {
        const move: Partial<{
            score: number;
            indexRow: number;
            indexColumn: number;
        }> = {};

        const [indexRow, indexColumn] = freeCells[i].split("-");

        move.indexRow = Number(indexRow);
        move.indexColumn = Number(indexColumn);

        gameboard[Number(indexRow)][Number(indexColumn)] = player;

        const availableCells = freeCells.filter(
            (cell) => cell !== freeCells[i]
        );

        if (player === opponentMark) {
            const result = minimax(
                gameboard,
                playerMark,
                availableCells,
                playerMark,
                opponentMark
            );
            move.score = result.score;
        } else {
            const result = minimax(
                gameboard,
                opponentMark,
                availableCells,
                playerMark,
                opponentMark
            );
            move.score = result.score;
        }

        moves.push(move);
    }

    let bestMove: number | undefined = undefined;

    if (player === opponentMark) {
        let bestScore = -Infinity;

        for (let i = 0; i < moves.length; i++) {
            // @ts-ignore
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score as number;
                bestMove = i;
            }
        }
    } else {
        let bestScore = Infinity;

        for (let i = 0; i < moves.length; i++) {
            // @ts-ignore
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score as number;
                bestMove = i;
            }
        }
    }

    return moves[bestMove as number];
};
