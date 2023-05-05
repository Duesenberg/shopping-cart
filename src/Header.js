import { React, useState } from "react";
import { Tabs, Tab } from '@mui/material';
import { Link } from "react-router-dom";

export default function Header () {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Tab label="About Us" tabIndex={1} component={Link} to={'/about-us'} />
          <Tab label="Shop" tabIndex={2} component={Link} to={'/shop'} />
          <Tab label={`Cart`} tabIndex={3} component={Link} to={'/shopping-cart'}>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}