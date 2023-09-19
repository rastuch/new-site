import Box from "@mui/material/Box";
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import {Container} from "@mui/material";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import Catalog from "../../components/Catalog";
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import styles from './styles'
import {fillerSwaggerByTag, swaggerUrl} from "./utils";
import Typography from "@mui/material/Typography";


const Swagger = () => {
    let { id } = useParams();
    const tagName = id;
    const [swaggerJson, setSwaggerJson] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);


    useEffect(() => {
        async function getSwagger(swaggerUrl, tagName) {
            setLoading(true);
            try {
                const response = await axios.get(swaggerUrl);
                const swaggerJson = response.data;

                const filerResult = fillerSwaggerByTag(tagName,swaggerJson);
                setSwaggerJson(filerResult);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }
        getSwagger(swaggerUrl,tagName);
    }, [tagName])

    return (
        <Container sx={styles.container}>
            <Catalog />
            <Box sx={styles.swaggerView}>
                {swaggerJson &&
                    <SwaggerUI spec={swaggerJson}/>
                }
                {loading &&
                    <Box sx={styles.loader}>
                        <CircularProgress size={100} />
                    </Box>}
                {error && <Typography varinat="h5">Swagger is currently unavailable </Typography>}
            </Box>
        </Container>
    );
}

export default Swagger;