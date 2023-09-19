import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardActions} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import {useNavigate} from "react-router-dom";
import './styles.css'

const ApiCard = ({name = ''}) => {
    const navigate = useNavigate();

    const onView = () => {
        navigate(`/swagger/${name.toLowerCase()}`);
    }

    return(
    <Card className='api-card-container'>
        <CardMedia
            component="img"
            alt="api_mock"
            height="180"
            image="https://images.all-free-download.com/images/graphiclarge/modern_lifestyle_background_people_laptop_icons_cartoon_sketch_6837961.jpg"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="outlined" size="small" onClick={onView}>View</Button>
            <Button variant="outlined" size="small">Learn More</Button>
        </CardActions>
    </Card>
    );
}

export default ApiCard;