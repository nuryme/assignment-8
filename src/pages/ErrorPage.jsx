import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  useEffect(() => {
    // Check if the page has been reloaded
    if (window.performance.navigation.type === 1) {  // Type 1 indicates a reload
      // Redirect to homepage after reload
      navigate('/');
    }
  }, [navigate]);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div role="alert" className="alert alert-error min-w-[50%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Page Not found.</span>
      </div>
    </div>
  );
}
