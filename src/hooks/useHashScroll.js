// File: src/hooks/useHashScroll.js (NEW & IMPROVED VERSION)

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const useHashScroll = () => {
  const location = useLocation();
  const hashRef = useRef(""); // To store the hash value

  useEffect(() => {
    if (location.hash) {
      // Store the hash value when the URL changes
      hashRef.current = location.hash.substring(1);
    }

    // This is the key part: We use a MutationObserver to watch for changes in the page content.
    // It will wait until your Places data is loaded and rendered.
    const observer = new MutationObserver((mutations) => {
      // If there's a stored hash and the page has changed...
      if (hashRef.current) {
        const element = document.getElementById(hashRef.current);
        if (element) {
          // If the element now exists, scroll to it and stop observing.
          element.scrollIntoView({ behavior: "smooth", block: "start" });

          // Reset the ref so we don't scroll again on minor changes
          hashRef.current = "";

          observer.disconnect(); // Stop watching for changes
        }
      }
    });

    // Start observing the main body of the page for any changes.
    observer.observe(document.body, {
      childList: true, // Watch for added/removed elements
      subtree: true, // Watch all descendants of the body
    });

    // Cleanup function: disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, [location]); // This effect re-runs whenever the location changes

  return null;
};

export default useHashScroll;
