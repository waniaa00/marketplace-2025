"use client";
import { getCartItems, removeFromCart, updateCartQuantity } from "@/actions/actions";
import { Products } from "@/types/products";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation"

const Cart = () => {
  const [cartItems, setCartItems] = useState<Products[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };
  
  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };


  const router = useRouter();



  const handleProceed = () => {
    Swal.fire({
      title: "Process to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your Order has been successfully processed", "success");
        router.push("/checkout")
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-4">
          {cartItems.map((item) => (
            <div key={item._id} className="flex justify-between items-center border-b py-4">
              <div className="flex items-center space-x-4">
                {item.image && (
                  <Image
                  src ={urlFor(item.image).url()}
                  alt="product image"
                  className="w-16 h-16 object-cover rounded"
                  height={500}
                  width={500}
                  />
                )}  
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 bg-gray-200 rounded" onClick={() => handleDecrement(item._id)}>
                  <FaMinus />
                </button>
                <span className="px-4 py-2 border rounded">{item.inventory}</span>
                <button className="p-2 bg-gray-200 rounded" onClick={() => handleIncrement(item._id)}>
                  <FaPlus />
                </button>
              </div>
              <button className="p-2 bg-red-500 text-white rounded" onClick={() => handleRemove(item._id)}>
                <FaTrash />
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-lg font-semibold">Total: ${calculatedTotal().toFixed(2)}</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleProceed}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
