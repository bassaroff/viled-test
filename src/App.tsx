import {ThemeProvider} from "@mui/material";
import {Provider} from "react-redux";
import {AppRouter} from "./router/router";
import { store } from "./store"
import './assets/styles.scss';

export const App = () => {
  return (
      <div>
          <ThemeProvider theme={{}}>
              <Provider store={store}>
                  <AppRouter />
              </Provider>
          </ThemeProvider>
      </div>
  )

}
