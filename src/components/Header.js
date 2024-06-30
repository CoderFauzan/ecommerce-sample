
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items || []);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link to="/">E-Commerce</Link>
      </div>
      <nav>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/cart" className="mx-2">
          Cart ({cartCount})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
