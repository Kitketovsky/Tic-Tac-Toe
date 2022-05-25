import React, { FC, useState } from "react";
import { MARK_O, MARK_X } from "../../../constants/marks";
import { O, OutlineO, OutlineX, X } from "../../../assets/svg";
import { useAppDispatch } from "../../../redux/hooks/useAppDispatch";
import { changeTurn, setCellValue } from "../../../redux/reducers/gameSlice";
import { IMarks } from "../../../types/marks";
import styled from "styled-components";
import { colors } from "../../../UI/colors";

interface ButtonProps {
    mark: IMarks | number;
}

export const CellButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: ${colors.darkTheme.darkBlue};
    border-radius: 15px;
    border-bottom: ${({ mark }) =>
        `${typeof mark === "string" ? "6px" : "10px"} solid ${
            colors.darkTheme.shadowBlue
        }`};

    svg {
        width: 60%;
        height: 60%;
    }
`;

interface Props {
    id: number;
    mark: IMarks | number;
    myMark: IMarks;
    turn: IMarks;
    freeCells: number[];
}
export const Cell: FC<Props> = ({ id, mark, myMark, turn, freeCells }) => {
    const [isHovered, setIsHovered] = useState(false);

    const dispatch = useAppDispatch();

    const onCellClickHandler = () => {
        if (freeCells.includes(id)) {
            dispatch(setCellValue(id));
            dispatch(changeTurn());
        }
    };

    const isDisabled = turn !== myMark;

    return (
        <CellButton
            mark={mark}
            onClick={onCellClickHandler}
            disabled={isDisabled}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {mark === MARK_X && <X />}
            {mark === MARK_O && <O />}
            {typeof mark !== "string" &&
                isHovered &&
                (myMark === MARK_X ? <OutlineX /> : <OutlineO />)}
        </CellButton>
    );
};
