import React from 'react';
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ShoppingCart (props) {
  return (
    <div className="shopping-cart">
      <div className='items-list'>
        {props.cart.map((item) => {
            <Card 
              key={item.id}
              sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={require(`${item.url}`)}
                  title={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name} (${item.amount})
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button >Remove</Button>
                </CardActions>
            </Card>
        })}
      </div>

      <div className='summary-card'>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Total
            </Typography>
            <Typography variant="h5" component="div">
              Sum of money here-------
            </Typography>
          </CardContent>
          <CardActions>
            <Button >Checkout</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}