import './App.css';
import theme from "./themes/Light";
import {ThemeProvider} from "@mui/material";
import {Routing} from "./routing";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Routing />
            </ThemeProvider>
        </>
    );
}

export default App;
