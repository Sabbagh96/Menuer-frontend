import NavBar from "./NavBar";
import Footer from "./Footer";
export default function UserHome() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 min-h-screen p-4">
      {<NavBar />}
      <header
        className="bg-cover bg-center h-64 flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: "url(https://placehold.co/800x400)" }}
      >
        <h1 className="text-4xl font-bold">
          Ready to indulge your taste buds?
        </h1>
        <p className="text-lg mt-2">
          Explore a variety of flavors and cuisines that will tantalize your
          taste buds.
        </p>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search Food, Restaurant, Cuisine..."
            className="p-2 rounded-l-lg"
          />
          <button className="bg-pink-500 text-white p-2 rounded-r-lg">
            Search
          </button>
        </div>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Featured Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(8)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md flex items-center"
              >
                <img
                  src="https://placehold.co/100x100"
                  alt="Food"
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">Chicken Shawarma Fattah</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Roasted Royal
                  </p>
                  <p className="text-pink-500 font-bold">starts at: 120 LE</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Trending Businesses</h2>
          <a href="#" className="text-pink-500">
            See More
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md flex items-center"
              >
                <img
                  src="https://placehold.co/100x100"
                  alt="Business"
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">Roasted Royal</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">Restaurant</p>
                  <p className="text-pink-500 font-bold">4.4</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recommended For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(8)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md flex items-center"
              >
                <img
                  src="https://placehold.co/100x100"
                  alt="Food"
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">Chicken Shawarma Fattah</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Roasted Royal
                  </p>
                  <p className="text-pink-500 font-bold">starts at: 120 LE</p>
                </div>
              </div>
            ))}
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}
