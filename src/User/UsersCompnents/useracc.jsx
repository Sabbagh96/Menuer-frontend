export default function ProfileDashboard() {
  return (
    <div className="min-h-screen bg-zinc-100  text-zinc-900 ">
      <header className="bg-white  shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-pink-600 font-bold text-lg">MENUER</div>
          <input
            type="text"
            placeholder="Search Menuer..."
            className="bg-zinc-200  rounded-full px-4 py-2 focus:outline-none"
          />
          <img
            src="https://placehold.co/40x40"
            alt="Profile"
            className="rounded-full w-10 h-10"
          />
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        <div className="bg-white  shadow rounded-lg p-6 w-full md:w-1/3 mb-6 md:mb-0">
          <div className="flex flex-col items-center">
            <img
              src="https://placehold.co/100x100"
              alt="Profile"
              className="rounded-full w-24 h-24 mb-4"
            />
            <h2 className="text-xl font-semibold">Ahmed Mohamed</h2>
            <p className="text-zinc-600 ">ahmed2mohamed@gmail.com</p>
            <p className="mt-2">Joined 2024</p>
            <p>3 Orders</p>
            <p>2 Reviews</p>
          </div>
        </div>
        <div className="bg-white  shadow rounded-lg p-6 w-full md:w-2/3">
          <ul>
            <li className="flex justify-between items-center py-4 border-b border-zinc-200 ">
              <span>Past Orders</span>
              <span>&gt;</span>
            </li>
            <li className="flex justify-between items-center py-4 border-b border-zinc-200 ">
              <span>Favourites</span>
              <span>&gt;</span>
            </li>
            <li className="flex justify-between items-center py-4 border-b border-zinc-200 ">
              <span>Edit Profile</span>
              <span>&gt;</span>
            </li>
            <li className="flex justify-between items-center py-4 border-b border-zinc-200 ">
              <span>Report A Bug</span>
              <span>&gt;</span>
            </li>
            <li className="flex justify-between items-center py-4 text-red-600">
              <span>Delete My Account</span>
              <span>&gt;</span>
            </li>
          </ul>
        </div>
      </main>
      <footer className="bg-white  py-6 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-pink-600 font-bold text-lg mb-2">MENUER</div>
          <nav className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Businesses
            </a>
            <a href="#" className="hover:underline">
              Items
            </a>
          </nav>
          <p className="text-zinc-600  text-sm">
            All Copyrights reserved to Menuer. University Computer Science
            Graduation Project
          </p>
        </div>
      </footer>
    </div>
  );
}
