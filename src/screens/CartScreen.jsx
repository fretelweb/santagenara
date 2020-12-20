import { useSelector } from 'react-redux';

import { CartItem } from './components/CartItem';

export const CartScreen = () => {
  const { items, total } = useSelector((state) => state.cart);

  const cartItems = items.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const empty = (
    <h3 className="text-center text-muted py-5">
      <i className="fa fa-shopping-bag fa-3x mb-3"></i>
      <p>El carrito esta vacio</p>
    </h3>
  );

  return (
    <div className="container">
      <h3 className="mb-2">Carrito de Compras</h3>
      <div className="row">
        <div className="col-md-8">
          {items.length > 0 ? cartItems : empty}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              Precio total: <strong>S/ {total.toFixed(2)}</strong>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-success btn-block">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
