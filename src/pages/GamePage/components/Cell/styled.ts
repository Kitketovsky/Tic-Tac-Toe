import { IMarks } from "../../../../types/marks";
import styled from "styled-components";
import { colors } from "../../../../UI/colors";

interface ButtonProps {
    mark: IMarks | null;
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
        `${mark ? "6px" : "10px"} solid ${colors.darkTheme.shadowBlue}`};
`;
