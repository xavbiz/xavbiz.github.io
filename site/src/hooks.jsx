import React, { useRef, useState, useEffect } from 'react';

export const usePageNavigation = () => {
  const browserWindow = typeof window !== 'undefined' ? window : undefined;
  const [currentPage, setCurrentPage] = useState();
  const ref = useRef(currentPage);

  function handlePageNavigation() { 
    if (browserWindow && browserWindow.location.pathname !== ref.current) {
      setCurrentPage(browserWindow.location.pathname);
      setTimeout(() => browserWindow.scrollTo(0, 0), 50);
    }
  }

  useEffect(() => {
    ref.current = currentPage;
  });

  useEffect(() => {
    let checker;

    if (browserWindow) {
      setCurrentPage(browserWindow.location.pathname);
      checker = setInterval(handlePageNavigation, 200);
    }

    return () => {
      clearInterval(checker);
    }
  }, []);

  return [currentPage];
};
