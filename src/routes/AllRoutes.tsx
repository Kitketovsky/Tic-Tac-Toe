import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MenuPage } from "../pages/MenuPage/MenuPage";
import { ROUTES } from "./routes";
import { ProtectedRoute } from "./ProtectedRoute";
import { GamePage } from "../pages/GamePage/GamePage";

export const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<MenuPage />} />
                <Route element={<MenuPage />} path={ROUTES.MAIN} />
                <Route
                    element={
                        <ProtectedRoute>
                            <GamePage />
                        </ProtectedRoute>
                    }
                    path={ROUTES.GAME}
                />
            </Routes>
        </Router>
    );
};
