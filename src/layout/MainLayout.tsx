import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {closeSidebar, openSidebar} from "../store/sidebarSlice";
import {Header} from "./Header";

export const MainLayout = () => {
    const sidebarIsOpen = useSelector(
        (state) => state.sidebarOpenStatus.sidebarIsOpen
    );
    console.log(sidebarIsOpen);
    const dispatch = useDispatch();

    const theme = useTheme();
    const navigate = useNavigate();

    const handleSidebarOpen = () => dispatch(openSidebar());
    const handleSidebarClose = () => dispatch(closeSidebar());

    const AppWrapper = (props) => {
        return (
            <div>
                {props.children}
            </div>
        )
    }

    const Content = () => {
        return (
            <div>HELLO</div>
        );
    }
    const Footer = () => {
        return (
            <div>HELLO</div>
        );
    }

    return (
        <AppWrapper>
            <Header
                sidebarIsOpen={sidebarIsOpen}
                handleSidebarOpen={handleSidebarOpen}
                handleSidebarClose={handleSidebarClose}
            />
            <Content></Content>
            <Footer></Footer>
        </AppWrapper>
    )
}
