import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom'
import uniqid from 'uniqid';
import ShoppingCart from './ShoppingCart';
import userEvent from '@testing-library/user-event';

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
});

describe('prices and item amount show up correctly', () => {
  it('shows the correct amount of items', () => {
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

      expect(screen.getByText('Classic Pro Style Training Gloves x 3')).toBeInTheDocument();
      expect(screen.getByText('Classic Boxing Gloves x 2')).toBeInTheDocument();
  });

  it('shows the correct dollar amounts', () => {
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

      expect(screen.getByText('$34.99 x 3 = $104.97')).toBeInTheDocument();
      expect(screen.getByText('$19.59 x 2 = $39.18')).toBeInTheDocument();
      expect(screen.getByText('$144.15')).toBeInTheDocument();
  });

  it('function is called when remove button is clicked', async () => {
    const cart = [
      {
        name: 'Classic Pro Style Training Gloves',
        price: 34.99,
        url: './styles/assets/training-gloves.png',
        amount: 3,
        id: uniqid()
      }
    ]
    const user = userEvent.setup();
    const removeItemFromCart = jest.fn();
    render(<ShoppingCart cart={cart} removeItemFromCart={removeItemFromCart}/>);
    
    const removeButton = screen.getByRole('button', {name: "Remove"});
    expect(removeButton).toBeInTheDocument();

    await user.click(removeButton);
    expect(removeItemFromCart).toHaveBeenCalled();
  })
});
