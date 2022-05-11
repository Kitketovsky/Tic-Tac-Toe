import React from "react";
import { BlackO, BlackX } from "../../../../assets/svg";
import { MARK_O, MARK_X } from "../../../../constants/marks";
import { Button } from "../../../../components/Button";
import { Wrapper, PickMarkButtons } from "./styled";
import { useAppDispatch } from "../../../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../../../redux/hooks/useAppSelector";
import { setPlayersMarks } from "../../../../redux/reducers/gameSlice";

export const MenuOptions = () => {
    const dispatch = useAppDispatch();
    const myMark = useAppSelector((state) => state.game.me.mark);

    return (
        <Wrapper>
            <span>Pick player 1's mark</span>
            <PickMarkButtons mark={myMark}>
                <Button
                    color={"transparent"}
                    onClick={() => dispatch(setPlayersMarks({ mark: MARK_X }))}
                    content={<BlackX />}
                />
                <Button
                    color={"transparent"}
                    onClick={() => dispatch(setPlayersMarks({ mark: MARK_O }))}
                    content={<BlackO />}
                />
            </PickMarkButtons>
            <span>Remember: X goes first</span>
        </Wrapper>
    );
};
