import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';

const displayImages = [
    {
        url: "https://media.istockphoto.com/photos/biryani-picture-id1305452646?k=20&m=1305452646&s=612x612&w=0&h=7Wa8qW7NYrwWsnfhlSjLSll-wKpn9vtJ6zFBa3q3DvI=",
        alt: "img1"
    },
    {
        url: "https://img.freepik.com/free-photo/vertical-shot-homemade-pizza-wooden-surface_181624-50397.jpg?w=2000",
        alt: "img2"
    },
    {
        url: "https://media.istockphoto.com/photos/the-famous-fried-onion-smash-burger-with-cheese-and-fries-picture-id1226237624?k=20&m=1226237624&s=612x612&w=0&h=UIy8xEQyhc2eV9Rxdr9ws-saQipLV2zIH8gommi_GcE=",
        alt: "img3"
    },
    {
        url: "https://st2.depositphotos.com/5653638/11517/i/950/depositphotos_115179514-stock-photo-chicken-biryani-with-leg-piece.jpg",
        alt: "img4"
    },
    {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/18387423/76e3828065954885b05fdeaf2289dea0.jpg",
        alt: "img5"
    },
    {
        url: "https://media.istockphoto.com/photos/flying-burger-ingredients-picture-id876637502?k=20&m=876637502&s=612x612&w=0&h=YPhPSnsftL7zDMQ5I7Hd-mg2LYt7C1YI87eUBUWRLDI=",
        alt: "img6"
    },
    
]

const Item = styled.div`
    background-color: lightblue;
    height: 65vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const setBreakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 800, itemsToShow: 2 },
    { width: 1200, itemsToShow: 4 },
]



const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    rtCard: {
        height: '100%',
    },
    rtCardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));


const cards = [
    {
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x375.jpg",
        heading: 'Heading1',
        content: 'content about this food item'
    },
    {
        image: "https://assets.limetray.com/assets/user_images/menus/compressed/1636789829_Tandoorichickennew.jpg",
        heading: 'Heading2',
        content: 'content about this food item'
    },
    {

        image: "https://assets.cntraveller.in/photos/62644db46511cf2003cee423/master/pass/kolkata-biryani-lead.jpg",
        heading: 'Heading3',
        content: 'content about this food item'
    },
    {
        image: "https://www.flourandspiceblog.com/wp-content/uploads/2021/10/IMG_5232-2.jpg",
        heading: 'Heading4',
        content: 'content about this food item'
    },
    {
        image: "https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-11-735x735.jpg",
        heading: 'Heading5',
        content: 'content about this food item'
    },
    {
        image: "https://www.authenticroyal.com/wp-content/uploads/2021/06/LTFA-FY21_Biryani_Web_1280x1600_MyUniversalKitchen-1.jpg",
        heading: 'Heading6',
        content: 'content about this food item'
    },
]


const Home = () => {

    const classes = useStyles();

    return (

        <>


            <div style={{ margin: '6vh 1vw'}}>
                <Carousel breakPoints={setBreakPoints}>

                    {
                        displayImages.map((card, index) =>
                            <Item key={index}>
                                <img src={card.url} alt={card.alt} style={{ width: '100%', height: '100%' }} />
                            </Item>
                        )
                    }

                </Carousel>
            </div>



            <Container maxWidth="">
                <Grid container spacing={10}>
                    {cards.map((card, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card className={classes.index}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={card.image}
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.heading}
                                    </Typography>
                                    <Typography>
                                        {card.content}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>



            {/* </div> */}
        </>

    );
}


export default Home;