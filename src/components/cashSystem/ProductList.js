import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
const ProductList = () => {
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [clientNumber, setClientNumber] = useState("");
  const [diningOption, setDiningOption] = useState("Dine In");
  const [paymentMethod, setPaymentMethod] = useState("Visa");
  const [discount, setDiscount] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);
  const searchRef = useRef(null);
  let totalPrice = 0;

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      variants: ["small", "medium", "large"],
    },
    { id: 2, name: "Product 2", price: 20, variants: ["regular", "extra"] },
    { id: 3, name: "Product 3", price: 30, variants: ["standard", "premium"] },
    { id: 4, name: "Product 4", price: 555, variants: ["s", "deluxse"] },
    {
      id: 5,
      name: "Product 4",
      price: 555,
      variants: ["bdasdasic", "dedasdluxe"],
    },
  ];

  const addToCart = (product, variant) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(
      (item) => item.id === product.id && item.variant === variant
    );

    if (index !== -1) {
      updatedCart[index].quantity++;
    } else {
      const variantObject = product.variants.find((v) => v.name === variant);
      updatedCart.push({
        ...product,
        quantity: 1,
        variant: variant,
        price: variantObject ? variantObject.price : product.price, // Use variant price if available, otherwise fallback to product price
      });
    }

    setCart(updatedCart);
  };

  const removeFromCart = (productId, variant) => {
    const updatedCart = cart.filter(
      (item) => !(item.id === productId && item.variant === variant)
    );
    setCart(updatedCart);
  };

  const increaseQuantity = (productId, variant) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && item.variant === variant) {
        item.quantity++;
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId, variant) => {
    const updatedCart = cart.map((item) => {
      if (
        item.id === productId &&
        item.variant === variant &&
        item.quantity > 1
      ) {
        item.quantity--;
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.price.toString().includes(query) ||
          product.variants.some((variant) =>
            variant.toLowerCase().includes(query)
          )
      );
      setFilteredProducts(filtered);
      setIsDropdownOpen(true);
    } else {
      setFilteredProducts([]);
      setIsDropdownOpen(false);
    }
  };

  const handleProductClick = (product) => {
    // Prompt user to select a variant
    const selectedVariant = prompt(
      `Select variant for ${product.name}: ${product.variants.join(", ")}`
    );
    if (!selectedVariant || !product.variants.includes(selectedVariant)) {
      // Variant selection canceled or invalid variant selected
      return;
    }
    // Add product to cart with the selected variant
    addToCart(product, selectedVariant);
    setSearchQuery("");
    setFilteredProducts([]);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const applyDiscount = () => {
    setDiscountApplied(true);
  };

  const handleCheckout = async () => {
    const requestBody = {
      mobile: clientNumber,
      items_orders: cart.map((item) => ({
        item_id: item.id,
        item_variant: item.variant,
        quantity: item.quantity,
        price: item.price * item.quantity,
      })),
      discount: discountApplied ? discount : 0,
      dining_place: diningOption,
    };

    try {
      // Stringify the request body and log it
      const requestBodyString = JSON.stringify(requestBody);
      console.log("Initiating checkout process...");
      console.log("Request JSON:", requestBodyString);

      // Make the POST request
      const response = await axios.post("YOUR_API_ENDPOINT", requestBody);

      console.log("Order submitted successfully", response.data);
    } catch (error) {
      console.error("Error submitting order", error);
    }
  };

  return (
    <div className="container mx-auto p-4 mt-4 mb-4 rounded-3xl bg-gray-50 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="flex justify-between mb-4">
        <div className="relative w-1/4" ref={searchRef}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            onClick={() => setIsDropdownOpen(true)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Search products..."
          />
          {isDropdownOpen && filteredProducts.length > 0 && (
            <div className="absolute top-full overflow-y-scroll no-scrollbar h-[350px] left-0 w-full border border-gray-300 bg-white rounded mt-1 z-10">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <h3 className="text-lg">{product.name}</h3>
                  <p className="text-gray-700">Price: ${product.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <div className="w-full">
          <label className="block mb-2 font-bold">Client Number</label>
          <input
            type="text"
            value={clientNumber}
            onChange={(e) => setClientNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full">
          <label className="block mb-2 font-bold">Dining</label>
          <select
            value={diningOption}
            onChange={(e) => setDiningOption(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Dine In">Dine In</option>
            <option value="Take Away">Take Away</option>
          </select>
        </div>
        <div className="w-full">
          <label className="block mb-2 font-bold">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Visa">Visa</option>
            <option value="Cash">Cash</option>
          </select>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-full">
          <label className="block mb-2 font-bold">Add Discount</label>
          <div className="flex items-center">
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded mr-2"
              min="0"
              max="100"
            />
            <button
              onClick={applyDiscount}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-3/5">
          <h2 className="text-2xl font-bold mt-8 mb-4">Shopping Cart</h2>
          {cart.map((item) => {
            const itemTotalPrice = item.price * item.quantity;
            totalPrice += itemTotalPrice;

            return (
              <div
                key={`${item.id}-${item.variant}`}
                className="border p-4 rounded shadow mb-4"
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-700">Price: ${item.price}</p>
                <p className="text-gray-700">Variant: {item.variant}</p>
                <p className="text-gray-700">
                  Quantity:
                  <button
                    onClick={() => decreaseQuantity(item.id, item.variant)}
                    className="mx-2 bg-gray-200 text-gray-800 py-1 px-2 rounded"
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => increaseQuantity(item.id, item.variant)}
                    className="mx-2 bg-gray-200 text-gray-800 py-1 px-2 rounded"
                  >
                    +
                  </button>
                </p>
                <p className="text-gray-700">Total Price: ${itemTotalPrice}</p>
                <button
                  onClick={() => removeFromCart(item.id, item.variant)}
                  className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Remove from Cart
                </button>
              </div>
            );
          })}
        </div>
        <div className="w-2/5 p-4 border-l border-gray-300">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="bg-gray-100 p-4 rounded shadow">
            {cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="mb-2">
                <h3 className="text-lg">{item.name}</h3>
                <p className="text-gray-700">
                  {item.quantity} x ${item.price} = $
                  {item.price * item.quantity}
                </p>
              </div>
            ))}
            {discountApplied && (
              <div className="text-gray-700 mb-2">
                Discount Applied: {discount}%
              </div>
            )}
            <div className="border-t border-gray-300 mt-4 pt-4">
              <h3 className="text-lg font-bold">Subtotal:</h3>
              <p className="text-gray-700">
                $
                {discountApplied
                  ? totalPrice - (totalPrice * discount) / 100
                  : totalPrice}
              </p>
              <button
                onClick={handleCheckout}
                className="mt-4 w-full bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
