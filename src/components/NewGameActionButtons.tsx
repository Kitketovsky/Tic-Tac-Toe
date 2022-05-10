import React from "react";
import { Button } from "./Button";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.2rem;
    width: 100%;
`;

export const NewGameActionButtons = () => {
    return (
        <Wrapper>
            <Button color="orange" content="New game (vs CPU)" />
            <Button color="cyan" content="New game (vs Player)" />
        </Wrapper>
    );
};
