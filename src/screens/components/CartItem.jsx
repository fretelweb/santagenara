import React from 'react';

export const CartItem = ({ item }) => {
  console.log(item);
  return (
    <>
      <table className="table">
        <tr>
          <td width="10">
            <img src={`images/${item.image}`} alt="{item.}" width="50" />
          </td>
          <td>
            <strong>{item.producto} </strong>
          </td>
          <td className="text-right">S/{item.precio.toFixed(2)}</td>
          <td className="text-center">{item.cantidad}</td>
          <td className="text-right">
            <button type="button" className="btn btn-sm btn-danger">
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};
