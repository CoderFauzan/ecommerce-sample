
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="border rounded shadow-lg p-4 flex flex-col justify-between">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
      <div className="mt-4">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="mt-2">${product.price}</p>
        <button 
          onClick={handleAddToCart}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
