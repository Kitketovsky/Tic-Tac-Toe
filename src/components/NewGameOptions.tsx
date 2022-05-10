import React from "react";
import styled from "styled-components";
import { colors } from "../UI/colors";
import { BlackO, BlackX, O, X } from "../assets/svg";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    background-color: ${colors.darkTheme.darkBlue};
    width: 100%;
    border-radius: 15px;
    padding: 1.4rem;

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

const PickMarkButtons = styled.div`
    background-color: ${colors.darkTheme.black};
    padding: 0.3rem;
    border-radius: 10px;
    display: flex;
    width: 100%;

    button {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const NewGameOptions = () => {
    return (
        <Wrapper>
            <span>Pick player 1's mark</span>
            <PickMarkButtons>
                <button>
                    <BlackO />
                </button>
                <button>
                    <BlackX />
                </button>
            </PickMarkButtons>
            <span>Remember: X goes first</span>
        </Wrapper>
    );
};
