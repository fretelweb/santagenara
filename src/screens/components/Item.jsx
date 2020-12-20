import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { addItem } from '../../reducers/cartActions';

export const Item = ({ item }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const onBtnAgregar = (item) => {
    dispatch(addItem(item));
  };

  const onBtnInfo = (item) => {
    history.push(`/producto/${item.id}`);
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-4">
      <div className="card mb-3">
        <img
          src={`images/${item.image}`}
          alt={item.producto}
          className="card-img"
        />
        <div className="card-body">
          <h5 className="card-title text-success">
            <strong>{item.producto}</strong>
          </h5>
          <p className="card-text">{item.uso}</p>
        </div>
        <div className="card-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onBtnAgregar(item)}
          >
            <i className="fa fa-shopping-basket"></i> Agregar
          </button>
          <span className="float-right">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                onBtnInfo(item);
              }}
            >
              <i className="fa fa-info-circle"></i>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
