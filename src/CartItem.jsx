import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  // Calculate total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // Increase quantity
  const handleIncrease = (id, quantity) => {
    dispatch(
      updateQuantity({
        id,
        quantity: quantity + 1,
      })
    );
  };

  // Decrease quantity
  const handleDecrease = (id, quantity) => {
    dispatch(
      updateQuantity({
        id,
        quantity: quantity - 1,
      })
    );
  };

  // Remove item
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  // Checkout
  const handleCheckout = () => {
    alert(
      "Thank you for shopping with Paradise Nursery! Checkout is coming soon."
    );
  };

  return (
    <div className="cart-page">

      {/* Navigation */}
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>

        <div className="nav-links">
          <button onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </nav>

      {/* Cart */}
      <main className="cart-container">

        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>

            <p>
              Add some beautiful plants to your cart!
            </p>

            <button
              className="continue-shopping"
              onClick={onContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="cart-items">

              {cartItems.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  {/* Product Information */}
                  <div className="cart-item-details">

                    <h2>{item.name}</h2>

                    <p>
                      Unit Price: ₹{item.price}
                    </p>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                    <p className="item-total">
                      Total: ₹
                      {item.price * item.quantity}
                    </p>

                  </div>

                  {/* Quantity Controls */}
                  <div className="quantity-controls">

                    <button
                      className="decrement"
                      onClick={() =>
                        handleDecrease(
                          item.id,
                          item.quantity
                        )
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      className="increment"
                      onClick={() =>
                        handleIncrease(
                          item.id,
                          item.quantity
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                  {/* Delete */}
                  <button
                    className="delete"
                    onClick={() =>
                      handleRemove(item.id)
                    }
                  >
                    Delete
                  </button>

                </div>

              ))}

            </div>

            {/* Cart Summary */}
            <div className="cart-summary">

              <h2>
                Total Amount: ₹{totalAmount}
              </h2>

              <div className="cart-actions">

                <button
                  className="continue-shopping"
                  onClick={onContinueShopping}
                >
                  Continue Shopping
                </button>

                <button
                  className="checkout"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>

              </div>

            </div>
          </>
        )}

      </main>
    </div>
  );
}

export default CartItem;