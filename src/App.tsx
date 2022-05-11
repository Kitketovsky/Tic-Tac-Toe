import React from "react";
import { GlobalStyles } from "./UI/globalStyles";
import { ContentWrapper } from "./UI/components/ContentWrapper";
import { AppWrapper } from "./UI/components/AppWrapper";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <AppWrapper>
                <ContentWrapper>
                    <AllRoutes />
                </ContentWrapper>
            </AppWrapper>
        </React.Fragment>
    );
}

export default App;
