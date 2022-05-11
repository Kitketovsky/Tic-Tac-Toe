import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { MainMenu } from "./pages/MainMenu";
import { colors } from "./UI/colors";
import { ContentWrapper } from "./components/ContentWrapper";
import { GamePage } from "./pages/GamePage";

const AppWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.darkTheme.black};
`;

function App() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <AppWrapper>
                <ContentWrapper>
                    {/*<MainMenu />*/}
                    <GamePage />
                </ContentWrapper>
            </AppWrapper>
        </React.Fragment>
    );
}

export default App;
