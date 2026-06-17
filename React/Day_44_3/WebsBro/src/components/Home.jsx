import { Link } from 'react-router-dom';
import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import UseRefExample from './UseRefExample';
import UseContextExample from './UseContextExample';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">WebsBro</h1>
            </div>
            <div className="space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 text-indigo-600 hover:text-indigo-800 font-medium transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-indigo-600">WeReact</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Build amazing web experiences with our platform. Get started today and unlock the power of modern web development.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/register"
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition transform hover:scale-105"
            >
              Get Started
            </Link>
            <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h4>
              <p className="text-gray-600">Experience blazing-fast performance with optimized infrastructure.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Secure</h4>
              <p className="text-gray-600">Your data is protected with enterprise-grade security.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Scalable</h4>
              <p className="text-gray-600">Grows with your business needs, from startup to enterprise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* React Hooks Demonstration Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            React Hooks <span className="text-indigo-600">Demonstrations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore practical examples of essential React hooks to manage state, side effects, DOM access, and global context.
          </p>
        </div>

        {/* Hooks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UseStateExample />
          <UseEffectExample />
          <UseRefExample />
          <UseContextExample />
        </div>

        {/* Hooks Explanation Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* useState Explanation */}
          <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
            <h4 className="text-lg font-bold text-red-700 mb-2">useState</h4>
            <p className="text-gray-700 text-sm">
              Manages state in functional components. When state changes, the component re-renders automatically. Perfect for counters, forms, toggles, and any data that changes.
            </p>
          </div>

          {/* useEffect Explanation */}
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h4 className="text-lg font-bold text-blue-700 mb-2">useEffect</h4>
            <p className="text-gray-700 text-sm">
              Handles side effects like API calls, timers, and subscriptions. Runs after render. Use dependency array to control when it runs. Always include cleanup functions to prevent memory leaks.
            </p>
          </div>

          {/* useRef Explanation */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
            <h4 className="text-lg font-bold text-green-700 mb-2">useRef</h4>
            <p className="text-gray-700 text-sm">
              Creates a direct reference to DOM elements. Doesn't cause re-renders when updated. Use for focusing inputs, managing media players, storing mutable values, or triggering animations.
            </p>
          </div>

          {/* useContext Explanation */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
            <h4 className="text-lg font-bold text-purple-700 mb-2">useContext</h4>
            <p className="text-gray-700 text-sm">
              Accesses global context values without prop drilling. Perfect for themes, user auth, language settings, or any data needed across many components. Wrap app with Provider first.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-indigo-100 mb-8 text-lg">Join thousands of users who are already building with WebsBro.</p>
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            Create Your Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 WebsBro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
