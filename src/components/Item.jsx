import { Component } from 'react';

class Item extends Component {
  state = {};
  rnd = Date.now();
  mistyle = {
    backgroundImage: `url(https://picsum.photos/seed/${this.rnd}/200/150/?blur=2)`,
  };
  render() {
    return (
      <div className="grid grid-cols-2 gap-2 border-2 border-green-500 rounded-lg overflow-hidden shadow-lg">
        <div className="bg-gray-100">
          <img
            src={`https://lorempixel.com/200/150/abstract?${this.props.index}`}
            alt=""
            className="object-cover h-full "
          />
        </div>
        <div className="p-2">
          <h3 className="text-green-700">Título del Item</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vel illum ipsam optio aspernatur ratione.
          </p>
          <input
            type="number"
            className="w-full border text-center px-2 py-1"
            value="1"
          />
          <button
            type="button"
            className="bg-green-300 border border-green-500 w-full rounded mt-2 "
          >
            Agregar
          </button>
        </div>
      </div>
    );
  }
}

export default Item;
