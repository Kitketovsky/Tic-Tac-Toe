import styled from "styled-components";
import { colors } from "../../UI/colors";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    button {
        width: max-content;
        border-radius: 10px;
    }
`;

export const Turn = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding: 0 1.5rem;
    height: 3.5rem;
    text-transform: uppercase;
    color: ${colors.darkTheme.grey};
    font-weight: bold;
    letter-spacing: 1px;
    background-color: ${colors.darkTheme.darkBlue};
    border-radius: 10px;
    border-bottom: 4px solid ${colors.darkTheme.shadowBlue};

    svg {
        width: 1.5rem;
    }
`;

export const ThreeColumnGrid = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    width: 100%;
    justify-items: center;
`;
