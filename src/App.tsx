import React from "react";
import { GlobalStyles } from "./UI/globalStyles";
import { ContentWrapper } from "./UI/components/ContentWrapper";
import { AppWrapper } from "./UI/components/AppWrapper";
import { AllRoutes } from "./routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <AppWrapper>
                <ContentWrapper>
                    <BrowserRouter>
                        <AllRoutes />
                    </BrowserRouter>
                </ContentWrapper>
            </AppWrapper>
        </React.Fragment>
    );
}

export default App;
