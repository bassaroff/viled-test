import {createSlice} from "@reduxjs/toolkit";

// Not usable, using this state globally cause some problems i cant solve :)
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
