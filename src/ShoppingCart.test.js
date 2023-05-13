import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom'
import uniqid from 'uniqid';
import ShoppingCart from './ShoppingCart';

describe('basic page layout renders correctly', () => {
  it('renders cart items and sum total card', () => {
    const cart = [
      {
        name: 'Classic Pro Style Training Gloves',
        price: 34.99,
        url: './styles/assets/training-gloves.png',
        amount: 3,
        id: uniqid()
      },
      {
        name: 'Classic Boxing Gloves',
        price: 19.59,
        url: './styles/assets/pro-boxing-gloves.png',
        amount: 2,
        id: uniqid()
      }
    ]
    render(<ShoppingCart cart={cart} />);

    expect(screen.getAllByTestId('cart-card')).not.toBeUndefined();
    expect(screen.getByTestId('sum-card')).toBeInTheDocument();
  });

  it('renders correct content when cart is empty', () => {
    const cart = [];
    render(<ShoppingCart cart={cart} />);

    expect(screen.getByTestId('empty-cart-card')).toBeInTheDocument();
    expect(screen.queryByTestId('sum-card')).not.toBeInTheDocument();
  })
})