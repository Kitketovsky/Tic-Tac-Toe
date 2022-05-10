import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../UI/colors";

type ButtonColorProps = "orange" | "cyan";

interface WrapperProps {
    color: ButtonColorProps;
}

const getColor = (
    prefix: "dark" | "light" | "shadow",
    color: ButtonColorProps
) => {
    const [firstLetter, ...otherLetters] = color;
    const colorName = `${prefix}${
        (firstLetter.toUpperCase() +
            otherLetters.join("")) as Capitalize<ButtonColorProps>
    }` as const;

    return colors.darkTheme[colorName];
};

const Wrapper = styled.button<WrapperProps>`
    border-radius: 15px;
    text-transform: uppercase;
    padding: 1rem;
    font-size: 1.25rem;
    width: 100%;
    background-color: ${({ color }) => getColor("dark", color)};
    font-weight: bold;
    letter-spacing: 1px;
    border-bottom: ${({ color }) => `6px solid ${getColor("shadow", color)}`};
    cursor: pointer;

    &:hover {
        background-color: ${({ color }) => getColor("light", color)};
    }
`;

interface Props {
    children: React.ReactNode;
    color: ButtonColorProps;
}

export const Button: FC<Props> = ({ children, color }) => {
    return <Wrapper color={color}>{children}</Wrapper>;
};
