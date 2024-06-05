// export default function Home() {
//   return (
//     <div className="bg-zinc-100 dark:bg-zinc-900 min-h-screen p-4">
//       <header
//         className="bg-cover bg-center h-64 flex flex-col justify-center items-center text-white"
//         style={{ backgroundImage: "url(https://placehold.co/800x400)" }}
//       >
//         <h1 className="text-4xl font-bold">
//           Ready to indulge your taste buds?
//         </h1>
//         <p className="text-lg mt-2">
//           Explore a variety of flavors and cuisines that will tantalize your
//           taste buds.
//         </p>
//         <div className="mt-4">
//           <input
//             type="text"
//             placeholder="Search Food, Restaurant, Cuisine..."
//             className="p-2 rounded-l-lg"
//           />
//           <button className="bg-pink-500 text-white p-2 rounded-r-lg">
//             Search
//           </button>
//         </div>
//       </header>

//       <section className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Featured Today</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {Array(8)
//             .fill()
//             .map((_, index) => (
//               <div
//                 key={index}
//                 className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md flex items-center"
//               >
//                 <img
//                   src="https://placehold.co/100x100"
//                   alt="Food"
//                   className="w-20 h-20 rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="text-lg font-bold">Chicken Shawarma Fattah</h3>
//                   <p className="text-zinc-600 dark:text-zinc-400">
//                     Roasted Royal
//                   </p>
//                   <p className="text-pink-500 font-bold">starts at: 120 LE</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </section>

//       <section className="mt-8">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold">Trending Businesses</h2>
//           <a href="#" className="text-pink-500">
//             See More
//           </a>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {Array(4)
//             .fill()
//             .map((_, index) => (
//               <div
//                 key={index}
//                 className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md flex items-center"
//               >
//                 <img
//                   src="https://placehold.co/100x100"
//                   alt="Business"
//                   className="w-20 h-20 rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="text-lg font-bold">Roasted Royal</h3>
//                   <p className="text-zinc-600 dark:text-zinc-400">Restaurant</p>
//                   <p className="text-pink-500 font-bold">4.4</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </section>

//       <section className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Recommended For You</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {Array(8)
//             .fill()
//             .map((_, index) => (
//               <div
//                 key={index}
//                 className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md flex items-center"
//               >
//                 <img
//                   src="https://placehold.co/100x100"
//                   alt="Food"
//                   className="w-20 h-20 rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="text-lg font-bold">Chicken Shawarma Fattah</h3>
//                   <p className="text-zinc-600 dark:text-zinc-400">
//                     Roasted Royal
//                   </p>
//                   <p className="text-pink-500 font-bold">starts at: 120 LE</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

// Constants for repeated class strings
const containerClass = "bg-white  p-4 rounded-lg shadow-md flex items-center";
const titleClass = "text-lg font-bold";
const subtextClass = "text-zinc-600 ";
const highlightClass = "text-pink-500 text-sm font-bold";

// Component for individual items in the grid
const GridItem = ({ imageUrl, title, subtitle, highlight }) => (
  <div className={containerClass}>
    <img src={imageUrl} alt={title} className="w-20 h-20 rounded-full mr-4" />
    <div>
      <h3 className={titleClass}>{title}</h3>
      <p className={subtextClass}>{subtitle}</p>
      <div className="flex gap-4 ">
        <span className={highlightClass}>{highlight}</span>
        <img src={imageUrl} alt="" className="w-3  rounded-full mr-4" />
      </div>
    </div>
  </div>
);

// Section component
const Section = ({ title, items, linkText, linkHref }) => (
  <section className="mt-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      {linkText && (
        <a href={linkHref} className={highlightClass}>
          {linkText}
        </a>
      )}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <GridItem key={index} {...item} />
      ))}
    </div>
  </section>
);

const FoodListing = () => {
  // Sample data for sections
  const featuredItems = Array(3).fill({
    imageUrl: "https://placehold.co/100x100",
    title: "Chicken Shawarma Fattah",
    subtitle: "Roasted Royal",
    highlight: "starts at: 120 LE",
  });

  const trendingItems = Array(4).fill({
    imageUrl: "https://placehold.co/100x100",
    title: "Roasted Royal",
    subtitle: "Restaurant",
    highlight: "4.4",
  });

  const recommendedItems = Array(6).fill({
    imageUrl: "https://placehold.co/100x100",
    title: "Chicken Shawarma Fattah",
    subtitle: "Roasted Royal",
    highlight: "starts at: 120 LE",
  });
  const YouMayAlsoLike = Array(6).fill({
    imageUrl: "https://placehold.co/100x100",
    title: "Chicken Shawarma Fattah",
    subtitle: "Roasted Royal",
    highlight: "starts at: 120 LE",
  });

  return (
    <div className="bg-zinc-100  min-h-screen pt-0 p-4">
      <header
        className="bg-cover bg-center h-64 flex flex-col  items-center text-white"
        style={{ backgroundImage: "url(https://placehold.co/800x400)" }}
      >
        <div className="bg-black w-full">{<Navbar />}</div>
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

      <Section title="Featured Today" items={featuredItems} />
      <Section
        title="Trending Businesses"
        items={trendingItems}
        linkText="See More"
        linkHref="#"
      />
      <Section title="Recommended For You" items={recommendedItems} />
      <Section title="You May Also Like" items={YouMayAlsoLike} />
      <Footer />
    </div>
  );
};

export default FoodListing;
