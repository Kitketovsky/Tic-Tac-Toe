import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../../UI/colors";
import { IMarks } from "../../../types/marks";
import { MARK_O, MARK_X } from "../../../constants/marks";
import { O, X } from "../../../assets/svg";

interface ButtonProps {
    mark: IMarks | null;
}

const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: ${colors.darkTheme.darkBlue};
    border-radius: 15px;
    border-bottom: ${({ mark }) =>
        `${mark ? "6px" : "10px"} solid ${colors.darkTheme.shadowBlue}`};
`;

interface Props {
    id: string;
    mark: IMarks | null;
    myMark: IMarks;
    turn: IMarks;
}

export const Cell: FC<Props> = ({ id, mark, myMark, turn }) => {
    const [row, cell] = id.split("-");

    const isDisabled = turn !== myMark;

    const onCellClickHandler = () => {
        console.table({ row, cell, myMark });
    };

    return (
        <Button mark={mark} onClick={onCellClickHandler} disabled={isDisabled}>
            {mark === MARK_X && <X />}
            {mark === MARK_O && <O />}
        </Button>
    );
};
