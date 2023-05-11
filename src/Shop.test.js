import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Shop from "./Shop";
import { productsArray } from "./productsArray";

describe('rendering components', () => {
  it('renders heading', () => {
    render(<Shop products={productsArray} />);
    expect(screen.getByRole('heading', {name: 'Shop'}).textContent).toMatch('Shop');
  });
  
  it('renders product cards', () => {
    render(<Shop products={productsArray} />);
    expect(screen.getAllByTestId('product-card')).not.toBeUndefined();
  });
  
  it('calls the appropriate functions when add to cart is clicked', async () => {
    const user = userEvent.setup();
    const populateCart = jest.fn();

    render(<Shop products={productsArray} populateCart={populateCart} />);
    const addToCartButton = screen.getAllByRole('button', {name: 'Add to Cart'})[0];

    await user.click(addToCartButton);

    expect(populateCart).toHaveBeenCalled();
  })
});