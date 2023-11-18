import React, { useEffect, useState } from 'react';

export default function StaticButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='sticky'>
      {showButton && (
        <button
          id="to-top-button"
          onClick={goToTop}
          title="Go To Top"
          className="fixed bottom-20 right-8 w-16 h-16 rounded-full bg-greenShade text-white text-3xl font-bold focus:outline-none"
        >
          &uarr;
        </button>
      )}
    </div>
  );
};
