import { checkGameboardColumn } from "./checkGameboardColumn";
import { checkGameboardRows } from "./checkGameboardRows";
import { checkGameboardLeftDiagonal } from "./checkGameboardLeftDiagonal";
import { checkGameboardRightDiagonal } from "./checkGameboardRightDiagonal";

export const checkGameboardFunctions = [
    checkGameboardColumn,
    checkGameboardRows,
    checkGameboardLeftDiagonal,
    checkGameboardRightDiagonal,
];
