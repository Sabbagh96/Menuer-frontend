export default function ItemInsideBusseniss() {
  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            className="rounded-lg"
            src="https://placehold.co/600x400"
            alt="Chicken Shawerma Fattah"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold">Chicken Shawerma Fattah</h1>
          <p className="text-zinc-600">Roasted Royal</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">⭐ 4.3</span>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Vundefinednts</h2>
            <ul className="mt-2">
              <li className="flex justify-between">
                <span>Small</span>
                <span className="text-pink-500">80 L.E</span>
              </li>
              <li className="flex justify-between mt-2">
                <span>Medium</span>
                <span className="text-pink-500">120 L.E</span>
              </li>
              <li className="flex justify-between mt-2">
                <span>Large</span>
                <span className="text-pink-500">160 L.E</span>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Give a Review</h2>
            <textarea
              className="w-full mt-2 p-2 border rounded-lg"
              placeholder="Your Review..."
            />
            <div className="flex items-center mt-2">
              <div className="flex space-x-1 text-yellow-500">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
              </div>
              <button className="ml-auto bg-pink-500 text-white px-4 py-2 rounded-lg">
                Post
              </button>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Other Reviews</h2>
            <div className="mt-4">
              <div className="flex items-start space-x-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://placehold.co/40"
                  alt="User Avatar"
                />
                <div>
                  <p className="font-semibold">User Name</p>
                  <p className="text-zinc-600">
                    I've ordered this dish multiple times...
                  </p>
                  <div className="flex items-center text-zinc-500 text-sm">
                    <span>1 day ago</span>
                    <span className="ml-2 text-yellow-500">⭐ ⭐ ⭐ ⭐ ⭐</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4 mt-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://placehold.co/40"
                  alt="User Avatar"
                />
                <div>
                  <p className="font-semibold">User Name</p>
                  <p className="text-zinc-600">I love it!</p>
                  <div className="flex items-center text-zinc-500 text-sm">
                    <span>1 day ago</span>
                    <span className="ml-2 text-yellow-500">⭐ ⭐ ⭐ ⭐ ⭐</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4 mt-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://placehold.co/40"
                  alt="User Avatar"
                />
                <div>
                  <p className="font-semibold">User Name</p>
                  <p className="text-zinc-600">
                    Never disappoints! Always delicious...
                  </p>
                  <div className="flex items-center text-zinc-500 text-sm">
                    <span>3 days ago</span>
                    <span className="ml-2 text-yellow-500">⭐ ⭐ ⭐ ⭐ ⭐</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="text-zinc-500">Previous</button>
              <div className="flex space-x-2">
                <button className="bg-zinc-200 px-3 py-1 rounded-lg">1</button>
                <button className="bg-zinc-200 px-3 py-1 rounded-lg">2</button>
                <button className="bg-zinc-200 px-3 py-1 rounded-lg">3</button>
                <span className="text-zinc-500">...</span>
                <button className="bg-zinc-200 px-3 py-1 rounded-lg">10</button>
              </div>
              <button className="text-zinc-500">Next</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold">You May Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border rounded-lg p-4">
                <img
                  className="w-full h-32 object-cover rounded-lg"
                  src="https://placehold.co/200"
                  alt="Card Heading"
                />
                <h3 className="mt-2 font-semibold">Card Heading</h3>
                <p className="text-zinc-500">5 Vundefinednts</p>
                <p className="text-pink-500 mt-2">starts at 120 L.E</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
