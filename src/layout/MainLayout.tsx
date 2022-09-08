import { Outlet } from "react-router-dom";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";

export const MainLayout = (props) => {
    const AppWrapper = (props) => {
        return (
            <div>
                {props.children}
            </div>
        )
    }

    const Content = () => {
        return (
            <div className='content'>
                <Outlet/>
            </div>
        );
    }

    return (
        <AppWrapper>
            <Header/>
            <Content/>
            <Footer/>
        </AppWrapper>
    )
}
