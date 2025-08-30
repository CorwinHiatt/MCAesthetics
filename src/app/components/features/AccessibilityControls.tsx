import React, { useState } from 'react';
import { Accessibility } from 'lucide-react';

const AccessibilityControls = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  const increaseZoom = () => {
    const newZoom = Math.min(zoomLevel + 10, 150);
    setZoomLevel(newZoom);
    document.documentElement.style.fontSize = `${(newZoom / 100) * 16}px`;
  };

  const decreaseZoom = () => {
    const newZoom = Math.max(zoomLevel - 10, 70);
    setZoomLevel(newZoom);
    document.documentElement.style.fontSize = `${(newZoom / 100) * 16}px`;
  };

  const resetZoom = () => {
    setZoomLevel(100);
    document.documentElement.style.fontSize = '16px';
  };

  return (
    <div className="relative">
      <button
        className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open accessibility options"
        aria-expanded={isOpen}
      >
        <Accessibility className="h-5 w-5 text-blue-600" />
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Accessibility Options</h3>
          <div className="mb-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={highContrast}
                onChange={toggleContrast}
                className="w-4 h-4 mr-2"
                aria-label="Toggle high contrast mode"
              />
              <span className="text-sm text-gray-700">High Contrast Mode</span>
            </label>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-700 mb-2">Zoom Level: {zoomLevel}%</p>
            <div className="flex gap-2">
              <button
                className="w-10 py-1 bg-gray-200 rounded hover:bg-gray-300"
                onClick={decreaseZoom}
                aria-label="Decrease zoom level"
              >
                -
              </button>
              <button
                className="w-16 py-1 bg-gray-200 rounded hover:bg-gray-300"
                onClick={resetZoom}
                aria-label="Reset zoom level"
              >
                Reset
              </button>
              <button
                className="w-10 py-1 bg-gray-200 rounded hover:bg-gray-300"
                onClick={increaseZoom}
                aria-label="Increase zoom level"
              >
                +
              </button>
            </div>
          </div>
          <button
            className="mt-2 w-full py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityControls;
