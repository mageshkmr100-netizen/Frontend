import { useState, useEffect } from 'react';

/**
 * useEffect Hook Example - Live Clock
 * 
 * How it works:
 * - useEffect runs code after component renders
 * - The empty dependency array [] means it runs only once (on mount)
 * - We set up an interval timer that updates every second
 * - Cleanup function removes the interval when component unmounts (prevents memory leaks)
 */
export default function UseEffectExample() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Set up the timer
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function - runs when component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array = runs once on mount

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
      <h3 className="text-xl font-bold text-gray-800 mb-4">useEffect - Live Clock</h3>
      
      <p className="text-gray-600 mb-6">
        This clock updates every second using useEffect with a cleanup function.
      </p>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center mb-4">
        <span className="text-5xl font-bold text-indigo-600 font-mono">{time}</span>
      </div>

      <p className="text-xs text-gray-500 text-center">
        Updates every 1 second • Cleanup prevents memory leaks
      </p>
    </div>
  );
}
