import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Shop (props) {

  return (
    <div className="shop">
      <h1 className='title'>Shop</h1>

      <div className="cards-container">
        {
          props.products.map((product) => {
            return (
            <Card sx={{ maxWidth: 345 }} key={product.id} data-testid='product-card'>
              <CardMedia
                sx={{ height: 140 }}
                image={require(`${product.url}`)}
                title={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name} - ${product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <form 
                  className='buy-product'
                  onSubmit={(e) => {
                      e.preventDefault();
                      props.populateCart(product.index, props.cart, product.index);
                      props.sumItemsInCart(props.cart);
                  }}>
                  <div className='quantity'>
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" name="quantity" id={product.index} defaultValue={1} step="1" min="1" />
                  </div>
                  <Button 
                    type='submit' 
                    data-id={product.index}
                    className='submit-button'>Add to Cart</Button>
                </form>
              </CardActions>
            </Card>
            )
          })
        }
      </div>
    </div>
  )
}