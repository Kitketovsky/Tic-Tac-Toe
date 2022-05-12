import React, { FC } from "react";
import { GameInfoColors } from "../../../../types/game";
import { Title, Value, Wrapper } from "./styled";

interface Props {
    title: string;
    value: number;
    color: GameInfoColors;
}

// TODO: поменять название
export const GameInfo: FC<Props> = ({ title, value, color }) => {
    return (
        <Wrapper color={color}>
            <Title>{title}</Title>
            <Value>{value}</Value>
        </Wrapper>
    );
};
