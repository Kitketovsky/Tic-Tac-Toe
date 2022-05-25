import React, { FC } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { colors } from "../UI/colors";
import { motion } from "framer-motion";

export const Overlay = styled.div`
    position: absolute;
    inset: 0 0 0 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
`;

export const Wrapper = styled.div`
    position: absolute;
    z-index: 20;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    background-color: ${colors.darkTheme.darkBlue};
`;

const pageMotion = {
    initial: { opacity: 0, y: 0, x: "-50%" },
    animate: { opacity: 1, y: "-50%", x: "-50%" },
    exit: { opacity: 0, y: "-100%", x: "-50%" },
};

interface Props {
    open: boolean;
    children: React.ReactNode;
}

export const Modal: FC<Props> = ({ open, children }) => {
    if (!open) return null;

    return ReactDOM.createPortal(
        <Overlay>
            <Wrapper
                as={motion.div}
                variants={pageMotion}
                exit="exit"
                animate="animate"
                initial="initial"
            >
                {children}
            </Wrapper>
        </Overlay>,
        document.getElementById("portal") as HTMLDivElement
    );
};
