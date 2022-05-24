import styled from "styled-components";
import React, { FC } from "react";
import { motion } from "framer-motion";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 460px;
    width: 100%;
    margin: 2rem 1rem;
    row-gap: 2rem;
`;

const pageMotion = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
};

interface Props {
    children: React.ReactNode;
}

export const ContentWrapper: FC<Props> = ({ children }) => {
    return (
        <Wrapper
            as={motion.section}
            variants={pageMotion}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </Wrapper>
    );
};
