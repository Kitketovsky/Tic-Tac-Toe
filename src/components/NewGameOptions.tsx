import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../UI/colors";
import { BlackO, BlackX } from "../assets/svg";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.3rem;
    background-color: ${colors.darkTheme.darkBlue};
    width: 100%;
    border-radius: 15px;
    padding: 1.4rem;
    border-bottom: 6px solid ${colors.darkTheme.shadowBlue};

    span {
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1px;
    }

    span:nth-child(1) {
        color: ${colors.darkTheme.grey};
    }

    span:nth-child(3) {
        color: ${colors.darkTheme.grey};
        font-size: 0.85rem;
        opacity: 0.5;
    }
`;

interface IPickMarkButtons {
    mark: "X" | "O";
}

const PickMarkButtons = styled.div<IPickMarkButtons>`
    background-color: ${colors.darkTheme.black};
    padding: 0.3rem;
    border-radius: 10px;
    display: flex;
    width: 100%;
    position: relative;

    button {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    svg {
        z-index: 2;
        height: 30px;
        width: 30px;
    }

    svg path {
        transition: fill 0.3s ease-in-out;
    }

    button:nth-child(1) svg path {
        fill: ${({ mark }) =>
            mark === "X" ? colors.darkTheme.black : colors.darkTheme.grey};
    }

    button:nth-child(2) svg path {
        fill: ${({ mark }) =>
            mark === "O" ? colors.darkTheme.black : colors.darkTheme.grey};
    }

    &::after {
        content: "";
        pointer-events: none;
        position: absolute;
        display: block;
        background-color: ${colors.darkTheme.grey};
        top: 10px;
        left: 10px;
        bottom: 10px;
        width: calc(50% - 10px);
        border-radius: 10px;
        transition: transform 0.3s ease-in-out;
        transform: ${({ mark }) =>
            mark === "X" ? "translateX(0%)" : "translateX(100%)"};
    }
`;

export const NewGameOptions = () => {
    const [mark, setMark] = useState<"X" | "O">("X");

    return (
        <Wrapper>
            <span>Pick player 1's mark</span>
            <PickMarkButtons mark={mark}>
                <button onClick={() => setMark("X")}>
                    <BlackX />
                </button>
                <button onClick={() => setMark("O")}>
                    <BlackO />
                </button>
            </PickMarkButtons>
            <span>Remember: X goes first</span>
        </Wrapper>
    );
};
