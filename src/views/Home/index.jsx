import React from 'react';
import {Container} from "@mui/material";
import MainCard from "../../components/MainCard";
import {ROUTES} from "../../routing";
import styles from './styles'

const Home = () => {
    return (
        <Container classes  sx={styles.container}>
            <MainCard title={'Payments'} path={ROUTES.CATALOG.PAYMENTS} />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
        </Container>
        );
}

export default Home;