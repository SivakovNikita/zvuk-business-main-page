import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    handleWindowSizeChange();

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width;
};

export default useWindowWidth;
