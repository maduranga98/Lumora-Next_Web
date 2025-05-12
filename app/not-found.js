// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
