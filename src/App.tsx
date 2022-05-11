import React from "react";
import { GlobalStyles } from "./UI/globalStyles";
import { MenuPage } from "./pages/MenuPage/MenuPage";
import { ContentWrapper } from "./UI/components/ContentWrapper";
import { GamePage } from "./pages/GamePage/GamePage";
import { AppWrapper } from "./UI/components/AppWrapper";
import { useAppSelector } from "./redux/hooks/useAppSelector";

function App() {
    const isStarted = useAppSelector((state) => state.game.isStarted);

    return (
        <React.Fragment>
            <GlobalStyles />
            <AppWrapper>
                <ContentWrapper>
                    {isStarted ? <GamePage /> : <MenuPage />}
                </ContentWrapper>
            </AppWrapper>
        </React.Fragment>
    );
}

export default App;
