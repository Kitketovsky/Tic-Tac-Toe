import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../UI/colors";
import { BlackO, BlackX } from "../assets/svg";
import { MARK_O, MARK_X } from "../constants/marks";
import { IMarks } from "../types/marks";
import { Button } from "./Button";

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
    mark: IMarks;
}

const PickMarkButtons = styled.div<IPickMarkButtons>`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0.5rem 0.7rem;
    border-radius: 10px;
    background-color: ${colors.darkTheme.black};

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
            mark === MARK_X ? colors.darkTheme.black : colors.darkTheme.grey};
    }

    button:nth-child(2) svg path {
        fill: ${({ mark }) =>
            mark === MARK_O ? colors.darkTheme.black : colors.darkTheme.grey};
    }

    &::after {
        content: "";
        position: absolute;
        display: block;
        pointer-events: none;
        width: calc(50% - 0.7rem);
        background-color: ${colors.darkTheme.grey};
        top: 0.5rem;
        left: 0.7rem;
        bottom: 0.5rem;
        border-radius: 10px;
        transition: transform 0.3s ease-in-out;
        transform: ${({ mark }) =>
            mark === MARK_X ? "translateX(0%)" : "translateX(100%)"};
        z-index: 1;
    }
`;

export const NewGameOptions = () => {
    // TODO: заменить на Redux Toolkit
    const [mark, setMark] = useState<IMarks>(MARK_X);

    return (
        <Wrapper>
            <span>Pick player 1's mark</span>
            <PickMarkButtons mark={mark}>
                <Button
                    color={"transparent"}
                    onClick={() => setMark(MARK_X)}
                    content={<BlackX />}
                />
                <Button
                    color={"transparent"}
                    onClick={() => setMark(MARK_O)}
                    content={<BlackO />}
                />
            </PickMarkButtons>
            <span>Remember: X goes first</span>
        </Wrapper>
    );
};
