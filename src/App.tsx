import React from "react";
import { GlobalStyles } from "./UI/globalStyles";
import { MenuPage } from "./pages/MenuPage/MenuPage";
import { ContentWrapper } from "./UI/components/ContentWrapper";
import { GamePage } from "./pages/GamePage/GamePage";
import { AppWrapper } from "./UI/components/AppWrapper";

function App() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <AppWrapper>
                <ContentWrapper>
                    {/*<MenuPage />*/}
                    <GamePage />
                </ContentWrapper>
            </AppWrapper>
        </React.Fragment>
    );
}

export default App;
