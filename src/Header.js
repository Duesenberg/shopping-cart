import { React, useEffect, useState } from "react";
import { Tabs, Tab } from '@mui/material';
import { Link } from "react-router-dom";

export default function Header (props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    props.sumItemsInCart(props.cart);
  })

  return (
    <div className="header">
      <div className="logo">
        <span className="star-icon"></span>
        <a 
          href="https://github.com/Duesenberg?tab=repositories" 
          target="_blank"
          className="logo-text">
            BoxShop
        </a>
        <span className="star-icon"></span>
      </div>

      <div className="navigation">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" tabIndex={0} component={Link} to={'/'} />
          <Tab label="Info" tabIndex={1} component={Link} to={'/about-us'} />
          <Tab label="Shop" tabIndex={2} component={Link} to={'/shop'} />
          <Tab label={`Cart (${props.itemsInCart})`} tabIndex={3} component={Link} to={'/shoppingcart'}>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}