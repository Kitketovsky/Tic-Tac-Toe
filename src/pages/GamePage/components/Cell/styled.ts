import { IMarks } from "../../../../types/marks";
import styled from "styled-components";
import { colors } from "../../../../UI/colors";

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
