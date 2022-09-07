import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {MainLayout} from "../layout/MainLayout";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route path='/' element={undefined}/>
                </Route>
            </Routes>
        </Router>
    )
}
