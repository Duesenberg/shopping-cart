import uniqid from 'uniqid';

const addToCart = (productIndex, cart, amount) => {
  let newCart = cart;

  switch (productIndex) {
    case 0:
      newCart.push({
        name: 'Classic Pro Style Training Gloves',
        price: 34.99,
        url: './styles/assets/training-gloves.png',
        amount: amount,
        id: uniqid()
      });
      break;
    case 1:
      newCart.push({
        name: 'Classic Boxing Gloves',
        price: 19.59,
        url: './styles/assets/pro-boxing-gloves.png',
        amount: amount,
        id: uniqid()
      });
      break;
    case 2:
      newCart.push({
        name: 'Full Face Training Headgear',
        price: 109.99,
        url: './styles/assets/full-face-headgear.png',
        amount: amount,
        id: uniqid()
      });
      break;
    case 3:
      newCart.push({
        name: 'Classic High Performance Headgear',
        price: 34.99,
        url: './styles/assets/high-performance-headgear.png',
        amount: amount,
        id: uniqid()
      });
      break;
    case 4:
      newCart.push({
        name: 'Semi-Elastic Hand Wraps',
        price: 9.99,
        url: './styles/assets/full-face-headgear.png',
        amount: amount,
        id: uniqid()
      });
      break;
    case 5:
      newCart.push({
        name: 'Traditional Hand Wraps',
        price: 3.99,
        url: './styles/assets/high-performance-headgear.png',
        amount: amount,
        id: uniqid()
      });
      break;
    case 6:
      newCart.push({
        name: 'Premium Leather Punching Bag',
        price: 299.99,
        url: './styles/assets/leather-punching-bag.png',
        amount: amount,
        id: uniqid()
      });
      break;
    case 7:
      newCart.push({
        name: 'Leather Speed Punching Bag',
        price: 54.99,
        url: './styles/assets/leather-speed-bag.png',
        amount: amount,
        id: uniqid()
      });
      break;
    default:
      break;
  }

  return newCart;
}

const getQuantityValue = (productIndex, inputId) => {
  let amount;
  if (productIndex === inputId)
    amount = document.getElementById(inputId).value;
  return amount;
}

const calculateCartSum = (cart) => {
  let cartSum = 0;
  cart.forEach(item => {cartSum += (item.amount * item.price);});
  return cartSum;
}

export { addToCart, getQuantityValue, calculateCartSum };
