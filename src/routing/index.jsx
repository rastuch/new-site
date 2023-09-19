import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../components/Layout";
import Home from  "../views/Home"
import Payments from "../views/Payments";
import NoPage from "../views/NoPage";
import Swagger from "../views/Swagger";

export const ROUTES = {
    CATALOG: {
        PAYMENTS: '/payments',
        SWAGGER: '/swagger:id'
    },
    MAIN: {
        HOME: '/',
        NO_PAGE: '*',
    }
}

export const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.MAIN.HOME} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={ROUTES.CATALOG.PAYMENTS} element={<Payments/>}/>
                    <Route path={ROUTES.MAIN.NO_PAGE} element={<NoPage/>}/>
                    <Route path={'/swagger'}>
                        <Route path={':id'} element={<Swagger />}/>
                    </Route>
                </Route>
            </Routes>
    </BrowserRouter>)
}