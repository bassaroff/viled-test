import {createSlice} from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebarOpenStatus',
    initialState: {
        sidebarIsOpen: false,
    },
    reducers: {
        openSidebar(state) {
            state.sidebarIsOpen = true;
        },
        closeSidebar(state) {
            state.sidebarIsOpen = false;
        },
    },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
