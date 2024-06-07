import React from "react";

const BussenissPage = () => {
  return (
    <div className="bg-zinc-100 min-h-screen">
      <header className="bg-white  shadow p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://placehold.co/40x40"
            alt="Logo"
            className="h-10 w-10"
          />
          <h1 className="ml-2 text-pink-500 text-2xl font-bold">MENUER</h1>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search Menuer..."
            className="bg-zinc-200  text-zinc-800  rounded-full px-4 py-2"
          />
          <img
            src="https://placehold.co/40x40"
            alt="User"
            className="h-10 w-10 rounded-full ml-4"
          />
        </div>
      </header>

      <div className="relative">
        <img
          src="https://placehold.co/1200x300"
          alt="Restaurant Banner"
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white  bg-opacity-75">
          <div className="flex items-center">
            <img
              src="https://placehold.co/80x80"
              alt="Restaurant Logo"
              className="h-20 w-20 rounded-full"
            />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Roasted Royal</h2>
              <p className="text-zinc-500">Restaurant</p>
              <div className="flex items-center mt-2">
                <span className="text-pink-500">❤️</span>
                <span className="ml-2 text-zinc-500">4.4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-4">
        <h2 className="text-2xl font-bold">Best Dishes Ever.</h2>
      </div>

      <div className="flex justify-center py-4">
        <input
          type="text"
          placeholder="Search for an item"
          className="bg-zinc-200  text-zinc-800  rounded-full px-4 py-2 w-1/2"
        />
        <button className="ml-2 bg-zinc-300  text-zinc-800  rounded-full px-4 py-2">
          Sort by
        </button>
        <button className="ml-2 bg-zinc-300  text-zinc-800  rounded-full px-4 py-2">
          Filter
        </button>
      </div>

      <div className="flex justify-center space-x-4 py-4">
        <button className="bg-pink-500 text-white rounded-full px-4 py-2">
          Syrian Meals
        </button>
        <button className="bg-zinc-300  text-zinc-800  rounded-full px-4 py-2">
          Hot Drinks
        </button>
        <button className="bg-zinc-300  text-zinc-800  rounded-full px-4 py-2">
          Soft Drinks
        </button>
        <button className="bg-zinc-300  text-zinc-800  rounded-full px-4 py-2">
          Ice Cream
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {Array(8)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 flex items-center"
            >
              <img
                src="https://placehold.co/80x80"
                alt="Dish"
                className="h-20 w-20 rounded-full"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-bold">Chicken Shawerma Fattah</h3>
                <p className="text-pink-500">5 Variants</p>
                <p className="text-zinc-500">starts at 120 L.E.</p>
              </div>
              <button className="ml-4 text-pink-500">❤️</button>
              <button className="ml-4 text-pink-500">➡️</button>
            </div>
          ))}
      </div>

      <footer className="bg-white text-center py-4">
        <div className="flex justify-center space-x-4">
          <button className="text-pink-500">Home</button>
          <button className="text-zinc-500">Businesses</button>
          <button className="text-zinc-500">Items</button>
        </div>
        <p className="text-zinc-500 mt-4">
          All Copyrights reserved © Helwan University Computer Science
          Graduation Project
        </p>
      </footer>
    </div>
  );
};

export default BussenissPage;
