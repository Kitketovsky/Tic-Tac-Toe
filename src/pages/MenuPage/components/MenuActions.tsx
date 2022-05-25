import React from "react";
import { Button } from "../../../components/Button";
import styled from "styled-components";
import { useAppDispatch } from "../../../redux/hooks/useAppDispatch";
import { IOpponentTypes } from "../../../types/opponent";
import { setOpponent, startNewGame } from "../../../redux/reducers/gameSlice";
import { OPPONENT_CPU, OPPONENT_HUMAN } from "../../../constants/opponent";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../routes/routes";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.2rem;
    width: 100%;
`;

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
                color="gray"
                content="New game (vs Player)"
                onClick={() => startNewGameHandler(OPPONENT_HUMAN)}
            />
        </Wrapper>
    );
};
