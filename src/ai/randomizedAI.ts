export const makesRandomizeTurn = (
    freeCells: string[]
): { rowIndex: string; cellIndex: string } => {
    const minValue = 0;
    const maxValue = freeCells.length - 1;

    const randomFreeCellIndex = Math.floor(
        Math.random() * (maxValue - minValue + 1) + minValue
    );

    const [rowIndex, cellIndex] = freeCells[randomFreeCellIndex].split("-");

    return { rowIndex, cellIndex };
};
