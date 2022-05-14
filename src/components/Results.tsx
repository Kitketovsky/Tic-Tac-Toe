import React, { FC } from "react";
import { IMarks } from "../types/marks";
import { Modal } from "./Modal";
import styled from "styled-components";
import { GridTable } from "../UI/components/GridTable";
import { Button } from "./Button";
import { colors } from "../UI/colors";
import { MARK_O, MARK_X } from "../constants/marks";
import { O, X } from "../assets/svg";
import { IDraw } from "../types/game";
import { DRAW } from "../constants/game";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    text-transform: uppercase;
    width: 100%;
    margin: 0 1rem;
`;

const Commentary = styled.span`
    color: ${colors.darkTheme.gray};
    font-weight: bold;
`;

interface AnnouncementProps {
    winner: IMarks | IDraw;
}

const Announcement = styled.div<AnnouncementProps>`
    font-size: 2.6rem;
    color: ${({ winner }) => {
        return winner === MARK_X
            ? colors.darkTheme.darkCyan
            : winner === MARK_O
            ? colors.darkTheme.darkOrange
            : colors.darkTheme.darkGray;
    }};
    display: flex;
    column-gap: 24px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
    width: 100%;

    @media screen and (max-width: 600px) {
        font-size: 1.8rem;
        row-gap: 16px;
        flex-direction: column;

        svg {
            height: 40px;
            width: 40px;
        }
    }
`;

interface Props {
    winner: IMarks | IDraw;
    myMark: IMarks;
    opponentMark: IMarks;
}

export const Results: FC<Props> = ({ winner, myMark, opponentMark }) => {
    const commentaryText =
        winner === myMark
            ? "You won!"
            : winner === opponentMark
            ? "Oh no, you lost..."
            : "You're even!";

    const winnerMarkIcon = winner === MARK_X ? <X /> : <O />;

    const announcementText =
        winner === DRAW ? "It's a tie!" : "Takes the round!";

    return (
        <Modal open={!!winner}>
            <Wrapper>
                <Commentary>{commentaryText}</Commentary>
                <Announcement winner={winner}>
                    {winnerMarkIcon} <span>{announcementText}</span>
                </Announcement>
                <GridTable columns={2}>
                    <Button content="Quit" color="gray" />
                    <Button content="Next round" color="orange" />
                </GridTable>
            </Wrapper>
        </Modal>
    );
};
