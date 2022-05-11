import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../UI/colors";

type GameInfoColors = "darkOrange" | "darkCyan" | "grey";

interface WrapperProps {
    color: GameInfoColors;
}

const Wrapper = styled.div<WrapperProps>`
    height: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 0.1rem;
    border-radius: 15px;
    background-color: ${({ color }) => colors.darkTheme[color]};
    width: 100%;
`;

const Title = styled.span`
    text-transform: uppercase;
    font-size: 0.85rem;
`;

const Value = styled.span`
    font-weight: bold;
    font-size: 1.25rem;
`;

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
