import React from 'react';
import { Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Home () {
  return (
    <div className="home">
      <h1 className='title'>Welcome!</h1>

      <Paper className='paragraph' elevation={1}>
        <p>Welcome to BoxShop, your one-stop-shop for all your boxing 
          equipment needs! We are thrilled to have you here and excited to 
          provide you with the highest quality boxing gear and accessories 
          available online. Whether you're a seasoned pro or just starting out, 
          our wide selection of products is sure to meet your every need.</p>
      </Paper>

      <Paper className='paragraph' elevation={1}>
        <p>At BoxShop, we understand that every boxer has unique requirements 
          when it comes to equipment. That's why we offer a wide variety of 
          products, including gloves, headgear, punching bags, and more, to 
          help you find the perfect fit for your style and skill level. With 
          our commitment to quality and customer satisfaction, you can rest 
          assured that you're getting the best products and service possible.</p>
      </Paper>

      <div className='visit-shop'>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={require("./styles/assets/home-1.jpg")}
              alt="boxing gloves"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Boxing Gloves
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Whether you're training for a big fight or just looking to get 
                in shape, a good pair of boxing gloves will help you get the most 
                out of your workout while keeping your hands safe from injury.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={require("./styles/assets/home-2.jpg")}
              alt="boxing headgear"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Headgear
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Whether you're a beginner or an experienced boxer, investing in 
                a good quality boxing headgear is a smart choice to ensure your 
                safety during training and competition.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={require("./styles/assets/home-3.jpg")}
              alt="punching bag"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Punching Bags
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Investing in a quality punching bag is a smart choice to 
              improve your skills and achieve your fitness goals.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <Paper 
        className='paragraph'
        elevation={1}>
        <p className='text'>We pride ourselves on our fast and efficient 
        shipping, so you can start training with your new gear as soon as 
        possible. Our friendly and knowledgeable customer service team is 
        also here to assist you with any questions or concerns you may have 
        along the way.</p>
        <img
          className='image' 
          src={require('./styles/assets/home-4.jpg')} 
          alt='fast shipping' />
      </Paper>

      <Paper className='paragraph' elevation={1}>
        <p>Thank you for choosing BoxShop as your go-to online store for 
          boxing equipment. We look forward to serving you and helping you 
          achieve your boxing goals!</p>
      </Paper>
    </div>
  )
}