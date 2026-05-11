import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fcf9f8] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        {/* Big 404 */}
        <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-2xl md:text-3xl font-bold text-base-content">
          Oops! Page not found
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-base-content/70 text-sm md:text-base">
          Looks like this page took a summer vacation ☀️ Don’t worry, we’ll help
          you get back on track.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn bg-orange-500 text-white hover:bg-orange-600 border-none rounded-full px-6"
          >
            Back to Home
          </Link>

          <Link
            href="/products"
            className="btn btn-outline border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full px-6"
          >
            Browse Products
          </Link>
        </div>

        {/* Decorative element */}
        <div className="mt-12">
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange-400 to-amber-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
