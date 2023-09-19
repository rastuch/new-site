import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {List, ListItem, ListItemText} from "@mui/material";
import React from "react";
import './styles.css'
import {ROUTES} from "../../routing";
import {useNavigate} from "react-router-dom";

const Catalog = ({screenName = ''}) => {

    const screens =
        [
            {name: 'Payments',path: ROUTES.CATALOG.PAYMENTS},
            {name: 'Users', path: ROUTES.CATALOG.PAYMENTS},
            {name: 'Home', path: ROUTES.CATALOG.PAYMENTS}
        ];

    const navigate = useNavigate();

    const handleItemClick = (index) => {
        navigate(screens[index].path);
    };

    return (
        <Box className="catalog-container">
            <Typography variant="h5" className="catalog-title" color="primary.main">
                Catalog
            </Typography>
            <List className='catalog-list'>
                {screens?.map((screen, index) => (
                    <ListItem
                        key={index}
                        button
                        selected={screens[index].name === screenName}
                        disabled={screens[index].name === screenName}
                        onClick={() => handleItemClick(index)}
                        className="catalog-list-item"
                    >
                        <ListItemText primary={screen.name} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
export default Catalog;