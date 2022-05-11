import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { colors } from "../UI/colors";

type ButtonColorProps = "orange" | "cyan" | "transparent";

type ColorPrefixes = "dark" | "light" | "shadow";

interface WrapperProps {
    color: ButtonColorProps;
}

const getColor = (
    prefix: ColorPrefixes,
    color: Exclude<ButtonColorProps, "transparent">
) => {
    const [firstLetter, ...otherLetters] = color;
    const colorName = `${prefix}${
        (firstLetter.toUpperCase() + otherLetters.join("")) as Capitalize<
            Exclude<ButtonColorProps, "transparent">
        >
    }` as const;

    return colors.darkTheme[colorName];
};

const Wrapper = styled.button<WrapperProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    text-transform: uppercase;
    padding: 1rem;
    font-size: 1.25rem;
    width: 100%;
    background-color: ${({ color }) =>
        color === "transparent" ? color : getColor("dark", color)};
    font-weight: bold;
    border-bottom: ${({ color }) =>
        color === "transparent"
            ? "none"
            : `6px solid ${getColor("shadow", color)}`};
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${({ color }) =>
            color === "transparent"
                ? colors.darkTheme.markButtonHover
                : getColor("light", color)};
    }
`;

interface Props extends HTMLAttributes<HTMLButtonElement> {
    content: string | React.ReactNode;
    color: ButtonColorProps;
}

export const Button: FC<Props> = ({ children, color, content, ...props }) => {
    return (
        <Wrapper color={color} {...props}>
            {content}
        </Wrapper>
    );
};
