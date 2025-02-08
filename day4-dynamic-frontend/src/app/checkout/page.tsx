"use client";

import { getCartItems } from "@/actions/actions";
import { Products } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

const CheckOut = () => {
  const [cartItems, setCartItems] = useState<Products[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    address: false,
    postalCode: false,
    city: false,
  });

  //discount
  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  //total
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  //discount handle
  const total = Math.max(subTotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      fullName: !formValues.fullName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      postalCode: !formValues.postalCode,
      city: !formValues.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  

  const handlePlaceOrder = async () => {


      Swal.fire({
      title : "Processing your order...",
      text : "Please wait a moment.",
      icon : "info",
      showCancelButton : true,
      confirmButtonColor : "#3085d6",
      cancelButtonColor : "#d33",
      confirmButtonText : "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
      Swal.fire(
        "Success!",
        "Your order has been successfully processed!",
        "success"
      );
    } else {
      Swal.fire(
        "Error!",
        "Please fill in all the field before proceeding",
        "error"
      );
    }
    }
  })



    const orderData = {
      _type : 'order',
      fullName: formValues.fullName,
      email: formValues.email,
      phone: formValues.phone,
      address: formValues.address,
      postalCode: formValues.postalCode,
      city: formValues.city,
      cartItems : cartItems.map(item =>({
        _type : 'reference',
       _ref : item._id
      })),
      total : total,
      discount : discount,
      orderDate : new Date().toISOString()

    };

    try{
      await client.create(orderData)
      localStorage.removeItem("appliedDiscount")
    } catch (error) {
      console.error("error creating order", error);
      
    }
  
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href={"/cart"}
              className="text-[#666666] hover:text-black transition tect-sm"
            >
              cart
            </Link>
            <CgChevronRight className="w-4 h-4 text-[#666666]" />
            <span className="text-sm">Checkout</span>
          </nav>
        </div>
      </div>
      {/* main  */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-col-1 lg:grid-col-2 gap-8">
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt="image"
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name} </h3>
                    <p className="text-xs text-gray-500">
                      Quantity : {item.inventory}
                    </p>
                  </div>
                  <p>${item.price * item.inventory}</p>
                </div>
              ))
            ) : (
              // colon indicating the situation that if there's zero item in inventory it must print this
              <p className="text-xs font-medium">Your cart is empty.</p>
            )}
            {/* final total */}
            <div className="text-right pt-4">
              <p className="text-sm">
                SubTotal: <span className="font-medium">${subTotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${subTotal.toFixed(2)}
              </p>
            </div>
          </div>
          {/* billing form div */}
          <div className="bg-white border rounded-lg p-6 space-y-6 shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800">
              Billing Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {formErrors.fullName && (
                  <p className="text-sm text-red-500">Full Name is required!</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {formErrors.phone && (
                  <p className="text-sm text-red-500">
                    Phone number is required!
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your Email address"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {formErrors.email && (
                  <p className="text-sm text-red-500">Email is required!</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {formErrors.address && (
                  <p className="text-sm text-red-500">Address is required!</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="postalCode"
                  className="font-medium text-gray-700"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  placeholder="Enter your postal code"
                  value={formValues.postalCode}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {formErrors.postalCode && (
                  <p className="text-sm text-red-500">
                    Postal Code is required!
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="city" className="font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter your city"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {formErrors.city && (
                  <p className="text-sm text-red-500">City is required!</p>
                )}
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
