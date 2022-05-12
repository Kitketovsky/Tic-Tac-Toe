import React, { FC, useState } from "react";
import { IMarks } from "../../../../types/marks";
import { MARK_O, MARK_X } from "../../../../constants/marks";
import { O, OutlineO, OutlineX, X } from "../../../../assets/svg";
import { useAppDispatch } from "../../../../redux/hooks/useAppDispatch";
import { changeTurn, setCellValue } from "../../../../redux/reducers/gameSlice";
import { CellButton } from "./styled";

interface Props {
    id: string;
    mark: IMarks | null;
    myMark: IMarks;
    turn: IMarks;
}

export const Cell: FC<Props> = ({ id, mark, myMark, turn }) => {
    const [rowIndex, cellIndex] = id.split("-");
    const [isHovered, setIsHovered] = useState(false);

    const dispatch = useAppDispatch();

    const onCellClickHandler = () => {
        dispatch(
            setCellValue({
                rowIndex,
                cellIndex,
                mark: myMark,
            })
        );

        // TODO: Merge with setting value
        dispatch(changeTurn());
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
            {!mark &&
                isHovered &&
                (myMark === MARK_X ? <OutlineX /> : <OutlineO />)}
        </CellButton>
    );
};