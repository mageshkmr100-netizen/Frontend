import { useRef } from 'react';

/**
 * useRef Hook Example - Focus Input
 * 
 * How it works:
 * - useRef creates a reference to a DOM element
 * - Unlike state, updating a ref does NOT cause re-render
 * - Directly access DOM: inputRef.current.focus()
 * - Perfect for focusing, selecting text, or controlling media playback
 */
export default function UseRefExample() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Directly access the input and focus it
    inputRef.current.focus();
    inputRef.current.value = ''; // Clear the input
  };

  const handleShowFocus = () => {
    if (inputRef.current) {
      inputRef.current.style.borderColor = '#059669';
      inputRef.current.style.boxShadow = '0 0 0 3px rgba(5, 150, 105, 0.1)';
      inputRef.current.focus();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
      <h3 className="text-xl font-bold text-gray-800 mb-4">useRef - Focus Input</h3>
      
      <p className="text-gray-600 mb-6">
        Click the button to automatically focus the input field using useRef - no re-render needed!
      </p>

      <input
        ref={inputRef}
        type="text"
        placeholder="Click 'Focus Me' button..."
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 mb-4 transition"
      />

      <div className="flex gap-3">
        <button
          onClick={handleFocus}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Focus & Clear
        </button>
        <button
          onClick={handleShowFocus}
          className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Highlight
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Direct DOM access • No state update • No re-render
      </p>
    </div>
  );
}
