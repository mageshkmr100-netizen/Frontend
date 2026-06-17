import { useState } from 'react';

/**
 * useState Hook Example - Like Counter
 * 
 * How it works:
 * - useState creates a state variable and a function to update it
 * - Every time setLikes is called, the component re-renders with new value
 * - The count persists across re-renders
 */
export default function UseStateExample() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleReset = () => {
    setLikes(0);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
      <h3 className="text-xl font-bold text-gray-800 mb-4">useState - Like Counter</h3>
      
      <p className="text-gray-600 mb-4">
        Click the button to increment the like counter. This demonstrates state management.
      </p>

      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="text-4xl font-bold text-red-500">❤️</span>
        <span className="text-5xl font-bold text-gray-800">{likes}</span>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleLike}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition transform hover:scale-105"
        >
          Like
        </button>
        <button
          onClick={handleReset}
          className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition"
        >
          Reset
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        State updates trigger re-render automatically
      </p>
    </div>
  );
}
