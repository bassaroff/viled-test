import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {MainLayout} from "../layout/MainLayout";
import {ItemsPage} from "../pages/ItemsPage/ItemsPage";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<ItemsPage/>}/>
                </Route>
            </Routes>
        </Router>
    )
}
