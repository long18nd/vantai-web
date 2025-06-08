// src/components/Toast.tsx
import React, { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
  duration?: number; // Optional: how long the toast should be visible in ms
}

const Toast: React.FC<ToastProps> = ({
  message,
  type,
  onClose,
  duration = 3000,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(); // Call onClose after the toast disappears
    }, duration);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [duration, onClose]);

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const textColor = "text-white";
  const shadow = "shadow-lg";
  const position = "fixed top-4 right-4 z-50"; // Top right corner

  if (!isVisible) return null;

  return (
    <div
      className={`${position} ${bgColor} ${textColor} ${shadow} px-6 py-3 rounded-md flex items-center justify-between space-x-4`}
      role="alert"
    >
      <span>{message}</span>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose();
        }}
        className="ml-4 p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
        aria-label="Close"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Toast;
