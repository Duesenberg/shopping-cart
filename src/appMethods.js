const addToCart = (productIndex, cart, amount) => {
  switch (productIndex) {
    case 0:
      cart.push({
        name: 'Classic Pro Style Training Gloves',
        price: 34.99,
        url: './styles/assets/training-gloves.png',
        amount: amount
      });
      break;
    case 1:
      cart.push({
        name: 'Classic Boxing Gloves',
        price: 19.59,
        url: './styles/assets/pro-boxing-gloves.png',
        amount: amount
      });
      break;
    case 2:
      cart.push({
        name: 'Full Face Training Headgear',
        price: 109.99,
        url: './styles/assets/full-face-headgear.png',
        amount: amount
      });
      break;
    case 3:
      cart.push({
        name: 'Classic High Performance Headgear',
        price: 34.99,
        url: './styles/assets/high-performance-headgear.png',
        amount: amount
      });
      break;
    case 4:
      cart.push({
        name: 'Semi-Elastic Hand Wraps',
        price: 9.99,
        url: './styles/assets/full-face-headgear.png',
        amount: amount
      });
      break;
    case 5:
      cart.push({
        name: 'Traditional Hand Wraps',
        price: 3.99,
        url: './styles/assets/high-performance-headgear.png',
        amount: amount
      });
      break;
    case 6:
      cart.push({
        name: 'Premium Leather Punching Bag',
        price: 299.99,
        url: './styles/assets/leather-punching-bag.png',
        amount: amount
      });
      break;
    case 7:
      cart.push({
        name: 'Leather Speed Punching Bag',
        price: 54.99,
        url: './styles/assets/leather-speed-bag.png',
        amount: amount
      });
      break;
    default:
      break;
  }
}

export { addToCart };
