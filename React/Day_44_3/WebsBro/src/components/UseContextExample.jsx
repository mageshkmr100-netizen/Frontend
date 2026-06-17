import { useTheme } from '../context/ThemeContext';

/**
 * useContext Hook Example - Theme Switcher
 * 
 * How it works:
 * - useContext accesses values from a Context without prop drilling
 * - useTheme() custom hook returns the theme from ThemeContext
 * - Any child component can call useTheme() and get theme values
 * - Perfect for global settings like theme, language, user auth
 */
export default function UseContextExample() {
  const { isDark, toggleTheme, bg, text } = useTheme();

  return (
    <div className={`${bg} rounded-lg shadow-md p-6 max-w-sm transition-colors duration-300 ${text}`}>
      <h3 className="text-xl font-bold mb-4">useContext - Theme Switcher</h3>
      
      <p className="mb-6 opacity-80">
        Toggle between light and dark theme. This state is available globally without passing props!
      </p>

      <div className={`rounded-lg p-6 mb-6 text-center transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-gray-100'
      }`}>
        <span className="text-5xl mb-3 block">
          {isDark ? '🌙' : '☀️'}
        </span>
        <p className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </p>
      </div>

      <button
        onClick={toggleTheme}
        className={`w-full font-semibold py-2 px-4 rounded-lg transition transform hover:scale-105 ${
          isDark
            ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'
            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
        }`}
      >
        {isDark ? 'Switch to Light' : 'Switch to Dark'}
      </button>

      <p className="text-xs mt-4 text-center opacity-60">
        Global state • No prop drilling • Persists across pages
      </p>
    </div>
  );
}
