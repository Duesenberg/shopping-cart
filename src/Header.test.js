import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Shop from "./Shop";
import Header from './Header';
import { productsArray } from "./productsArray";

describe('header feature works correctly', () => {
  it('shows correct number of items in cart', () => {
    render(
      <div>
        <Header />
        <Shop />
      </div>
    );

    
  });
});