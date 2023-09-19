import {useNavigate} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import Button from "@mui/material/Button";
import * as React from "react";
import {ROUTES} from "../../routing";

const NavBar = () => {
    const navigate = useNavigate();

    const onHome = () => {
        navigate(ROUTES.MAIN.HOME)
    }

    const onSignIn = () => {};

    const onLogin = () => {
        navigate(ROUTES.CATALOG.PAYMENTS)
    };

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={onHome}
                >
                <AccountBalanceOutlinedIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    API
                    </Typography>
                <Button color="inherit" onClick={onSignIn}>Sigin</Button>
                <Typography>|</Typography>
                <Button color="inherit" onClick={onLogin}>Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;