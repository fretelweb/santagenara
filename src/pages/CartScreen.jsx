import { useContext } from 'react';

import { CartItem } from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';

export const CartScreen = (props) => {
  const { cart } = useContext(CartContext);

  console.log(cart);

  const items = cart.map((item) => <CartItem key={item.id} item={item} />);

  return (
    <>
      <h2>Carrito de Compras</h2>
      <div class="grid grid-cols-2">{items}</div>
    </>
  );
};
