import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../../UI/colors";
import { IMarks } from "../../../types/marks";
import { useAppSelector } from "../../../redux/hooks/useAppSelector";

interface ButtonProps {}

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: ${colors.darkTheme.darkBlue};
    border-radius: 15px;
    border-bottom: 8px solid ${colors.darkTheme.shadowBlue}; //8px or 6px
`;

interface Props {
    mark: IMarks | null;
}

export const Cell: FC<Props> = ({ mark }) => {
    const myMark = useAppSelector((state) => state.game.me.mark);

    return <Button>{mark}</Button>;
};
