import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../UI/Style.css'

export default function Cookie() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const isCookieAccepted = localStorage.getItem('cookieAccepted');
    if (isCookieAccepted) {
      setShowBanner(false);
    }
  }, []);

  const handleAllow = () => {
    localStorage.setItem('cookieAccepted', 'true');
  };

  const handleCancel = () => {
    localStorage.setItem('cookieAccepted', 'false');
  };

  return (
    <CSSTransition
      in={showBanner}
      timeout={10000}
      classNames="cookie-banner"
      unmountOnExit
    >
      <div className="fixed bottom-0 w-full bg-gray-500 text-white p-4">
        <p className="text-center">
          This website uses cookies. By continuing to use this site, you agree to our use of cookies.
        </p>
        <div className="flex justify-center mt-2">
          <button
            className="mr-2 bg-green hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => {
              handleAllow();
              setShowBanner(false);
            }}
          >
            Allow
          </button>
          <button
            className="bg-green hover:bg-green text-white px-4 py-2 rounded"
            onClick={() => {
              handleCancel();
              setShowBanner(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </CSSTransition>
  );
}
