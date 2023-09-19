import React from "react";
import Box from "@mui/material/Box";
import "swagger-ui-react/swagger-ui.css"
import {Container} from "@mui/material";
import Catalog from "../../components/Catalog";
import ApiCard from "../../components/ApiCard";
import styles from "./styles";


function Payments() {
    return (
        <Container sx={styles.container}>
            <Catalog screenName={'Payments'}/>
            <Box sx={styles.cardsContainer}>
                <ApiCard name="Store"/>
                <ApiCard name="Pet" />
            </Box>
        </Container>
    );
}

export default Payments;