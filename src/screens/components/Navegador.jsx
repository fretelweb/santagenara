import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Navegador = () => {
  const { count } = useSelector((state) => state.cart);

  return (
    <>
      <div className="row">
        <nav className="col-3 navbar">
          <a href="tel:+5154222222">
            <i className="fa fa-phone"></i> +51 (54) 222222
          </a>
        </nav>
        <nav className="col-6 navbar">
          <Link to="/catalogo"> Inicio </Link>
          <Link to="/acerca"> Acerca </Link>
          <Link to="/contacto"> Contacto</Link>
          <Link to="/distribuidores"> Distribuidores</Link>

          {/* <Link to="/catalogo"> Catálogo </Link> */}
        </nav>
        <nav className="col-3 nav justify-content-end">
          <Link to="/login">
            <i className="fa fa-sign-in"></i> Login
          </Link>
          <Link to="/cart" className="">
            Carrito{' '}
            <span>
              <i className="fa fa-shopping-basket"></i> {count}
            </span>
          </Link>
        </nav>
      </div>
    </>
  );
};
