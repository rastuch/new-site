import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import './styles.css'

const MainCard = ({title = 'Home', path='/'}) => {
    const navigation = useNavigate();

    const onGoToCard = () => {
        navigation(path);
    }

    return(
        <Card onClick={onGoToCard} className="card">
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" color={'primary.main'} textAlign={'center'}>
                    {title}
                </Typography>
            </CardContent>
            <CardMedia
                className='card-image'
                alt="section_mock"
                image="https://img.freepik.com/vektoren-kostenlos/gluecklicher-freiberufler-mit-computer-zu-hause-junger-mann-der-im-sessel-sitzt-und-laptop-benutzt-online-plaudert-und-laechelt-vektorillustration-fuer-fernarbeit-online-lernen-freiberuflich_74855-8401.jpg"
                title="section_mock"
            />
        </Card>
    );
}

export default MainCard;