import { MARK_O, MARK_X } from "../constants/marks";

export type IMarkX = typeof MARK_X;
export type IMarkO = typeof MARK_O;

export type IMarks = IMarkX | IMarkO;
