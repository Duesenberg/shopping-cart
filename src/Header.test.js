import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Shop from "./Shop";
import Header from './Header';
import { productsArray } from "./productsArray";
import { BrowserRouter } from 'react-router-dom'

describe('header renders correctly', () => {
  it('renders logo', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    expect(screen.getByRole('link',{name: 'BoxShop'})).toBeInTheDocument();
  });
  
  it('has a functioning logo link', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    expect(screen.getByRole('link', {name: 'BoxShop'}))
    .toHaveAttribute('href', 'https://github.com/Duesenberg?tab=repositories');
  });
  
  it('shows the correct items in cart', () => {
    let itemsInCart = 5;
    render(<BrowserRouter><Header itemsInCart={itemsInCart} /></BrowserRouter>);
    const tabFour = screen.getAllByRole('tab')[3];

    expect(tabFour).toHaveTextContent('Cart (5)');
  })
});