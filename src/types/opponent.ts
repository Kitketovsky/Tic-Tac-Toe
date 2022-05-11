import { OPPONENT_CPU, OPPONENT_HUMAN } from "../constants/opponent";

export type IOpponentCPU = typeof OPPONENT_CPU;
export type IOpponentHuman = typeof OPPONENT_HUMAN;

export type IOpponentTypes = IOpponentCPU | IOpponentHuman;
