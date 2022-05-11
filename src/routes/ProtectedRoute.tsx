import React, { FC, ReactElement } from "react";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { Navigate, Outlet } from "react-router";
import { ROUTES } from "./routes";

interface Props {
    children: ReactElement<any, any> | null;
    redirectPath?: string;
}

export const ProtectedRoute: FC<Props> = ({
    redirectPath = ROUTES.MAIN,
    children,
}) => {
    const isGameStarted = useAppSelector((state) => state.game.isStarted);

    if (!isGameStarted) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};
