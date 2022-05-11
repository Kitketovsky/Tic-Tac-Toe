import styled from "styled-components";

interface GridTableProps {
    columns?: number;
}

export const GridTable = styled.div<GridTableProps>`
    display: grid;
    gap: 1rem;
    grid-template-columns: ${({ columns }) =>
        columns ? `repeat(3, ${columns}fr)` : "repeat(3, 1fr)"};
    grid-template-rows: auto;
    width: 100%;
    justify-items: center;
`;
