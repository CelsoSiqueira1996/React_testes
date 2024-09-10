import { Outlet } from "react-router-dom";
import { Cabecalho } from "../components/Cabecalho";
import Card from "../components/Card";

export function DefaultLayout() {
    return (
        <>
            <Cabecalho />
            <Card>
                <Outlet />
            </Card>
        </>
    )
}