import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useForm } from '../hooks/useForm';
import {
  loginWithEmailPassword,
  loginWithGoogle,
} from '../reducers/authActions';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });
  const { email, password } = formValues;

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginWithEmailPassword(email, password));
  };

  const onBtnGoogle = () => {
    dispatch(loginWithGoogle());
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-sm-6 col-md-4">
        <div className="card">
          <form onSubmit={onSubmit}>
            <div className="card-header">Ingresa tu usuario</div>
            <div className="card-body">
              <div className="mb-3">
                <input
                  type="text"
                  name="email"
                  autoComplete="off"
                  className="form-control"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="">
                <input
                  type="text"
                  name="password"
                  placeholder="Contraseña"
                  className="form-control"
                  autoComplete="off"
                  value={password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary btn-block" type="submit">
                Inicar Sesión
              </button>
              <button
                type="button"
                onClick={onBtnGoogle}
                className="btn btn-block btn-success"
              >
                Google signin
              </button>
            </div>
          </form>
        </div>
        <Link to="/register" className="btn btn-sm btn-link btn-block">
          No tengo cuenta!
        </Link>
      </div>
    </div>
  );
};
