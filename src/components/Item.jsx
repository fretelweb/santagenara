import { Component } from 'react';

class Item extends Component {
  rnd = Date.now();
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="grid grid-cols-2 gap-2 border-2 border-green-900 rounded-lg overflow-hidden shadow-inner">
        <div className="bg-gray-100">
          <img
            src={this.props.item.strMealThumb}
            alt=""
            className="object-cover h-60"
          />
        </div>
        <div className="p-2">
          <h3 className="text-green-800">{this.props.item.strMeal}</h3>
          <p className="text-gray-600 text-sm py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illum
            ipsam optio aspernatur ratione.
          </p>
          <div className="flex flex-auto border border-gray-400 rounded-l rounded-r">
            <button className="bg-gray-400 px-3 text-white ">-</button>
            <input
              type="number"
              className="w-full border text-center px-2 py-1"
              defaultValue="1"
            />
            <button className="bg-gray-400 px-3 text-white ">+</button>
          </div>
          <button
            type="button"
            className="bg-green-400 border border-green-500 w-full text-white rounded mt-2 py-1 hover:bg-green-600"
          >
            Agregar
          </button>
        </div>
      </div>
    );
  }
}

export default Item;
