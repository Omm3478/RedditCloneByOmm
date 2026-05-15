import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 p-4">

        {/* LEFT SIDEBAR */}
        <div className="hidden md:block md:col-span-3 bg-white rounded-xl p-3 h-fit">
          <h2 className="font-bold mb-2">Trending Communities</h2>
          <p className="text-sm text-gray-500">🔥 Gaming</p>
          <p className="text-sm text-gray-500">🔥 Technology</p>
          <p className="text-sm text-gray-500">🔥 Movies</p>
        </div>

        {/* MAIN FEED */}
        <div className="md:col-span-6">
          {children}
        </div>

        {/* RIGHT PANEL */}
        <div className="hidden md:block md:col-span-3 bg-white rounded-xl p-3 h-fit">
          <h2 className="font-bold mb-2">What’s Hot</h2>
          <p className="text-sm text-gray-500">Trending posts will appear here</p>
        </div>

      </div>
    </div>
  );
}

export default Layout;