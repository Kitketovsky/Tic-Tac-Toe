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
import { useNavigate } from "react-router";
import { ROUTES } from "../../../../routes/routes";

export const MenuActions = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const startNewGameHandler = (opponent: IOpponentTypes) => {
        dispatch(setOpponent({ opponent }));
        dispatch(startNewGame());
        navigate(ROUTES.GAME);
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
