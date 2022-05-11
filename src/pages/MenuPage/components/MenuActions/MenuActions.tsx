import React from "react";
import { Button } from "../../../../components/Button";
import styled from "styled-components";
import { Wrapper } from "./styled";
import { useAppDispatch } from "../../../../redux/hooks/useAppDispatch";
import { IOpponentTypes } from "../../../../types/opponent";
import {
    setOpponent,
    startNewGame,
} from "../../../../redux/reducers/gameSlice";
import { OPPONENT_CPU, OPPONENT_HUMAN } from "../../../../constants/opponent";

export const MenuActions = () => {
    const dispatch = useAppDispatch();

    const startNewGameHandler = (opponent: IOpponentTypes) => {
        dispatch(setOpponent({ opponent }));
        dispatch(startNewGame());
    };

    return (
        <Wrapper>
            <Button
                color="orange"
                content="New game (vs CPU)"
                onClick={() => startNewGameHandler(OPPONENT_CPU)}
            />
            <Button
                color="grey"
                content="New game (vs Player)"
                disabled
                onClick={() => startNewGameHandler(OPPONENT_HUMAN)}
            />
        </Wrapper>
    );
};
