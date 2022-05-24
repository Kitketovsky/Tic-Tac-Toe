import React from "react";
import { Route, Routes } from "react-router-dom";
import { MenuPage } from "../pages/MenuPage/MenuPage";
import { ROUTES } from "./routes";
import { ProtectedRoute } from "./ProtectedRoute";
import { GamePage } from "../pages/GamePage/GamePage";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";

export const AllRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
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
        </AnimatePresence>
    );
};
