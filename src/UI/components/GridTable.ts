import styled from "styled-components";

interface GridTableProps {
    columns?: number;
    width?: number;
    even?: boolean;
}

export const GridTable = styled.div<GridTableProps>`
    display: grid;
    gap: 1rem;
    grid-template-columns: ${({ columns, even }) => {
        if (even) {
            return columns ? `repeat(${columns}, 1fr)` : "repeat(3, 1fr)";
        } else {
            return columns ? `repeat(${columns}, auto)` : "repeat(3, auto)";
        }
    }};
    grid-template-rows: auto;
    width: ${({ width }) => (width ? `${100}%` : "auto")};
    justify-content: center;
`;
