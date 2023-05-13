import React, { useEffect, useState } from 'react';
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { calculateCartSum } from './appMethods';

export default function ShoppingCart (props) {
  const [cartSum, setCartSum] = useState(0);

  useEffect(() => {
    let sum = calculateCartSum(props.cart);
    setCartSum(sum);
  })

  return (
    <div className="shopping-cart">
      <div className='items-list'>
        {props.cart.length !== 0 ? props.cart.map((item) => {
          return(
            <Card 
              key={item.id}
              data-testid='cart-card'
              sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={require(`${item.url}`)}
                  title={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name} x {item.amount}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${item.price} x {item.amount} = ${item.price * item.amount}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button >Remove</Button>
                </CardActions>
            </Card>
          )}) :
            <Card sx={{ minWidth: 275 }} data-testid='empty-cart-card'>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Cart is empty.
                </Typography>
              </CardContent>
            </Card>
          }
      </div>

      <div className='summary-card'>
        {props.cart.length !== 0 ? 
          <Card sx={{ minWidth: 275 }} data-testid='sum-card'>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Total
              </Typography>
              <Typography variant="h5" component="div">
                ${cartSum}
              </Typography>
            </CardContent>
            <CardActions>
              <Button >Checkout</Button>
            </CardActions>
          </Card> : null}
      </div>
    </div>
  )
}