import React, { useEffect, useState } from "react";

export const TopButton = () => {

  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() { (window.pageYOffset > 300) ? setIsVisible(true) : setIsVisible(false); }

  const scrollToTop = () => {
     window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    //Clean-up function to avoid memory-leaks
    return () => { window.removeEventListener("scroll", toggleVisibility) }
  }, []);

    return (
      <div>
        {isVisible && (
          <button className="scroll-to-top" onClick={() => scrollToTop()}>
            Top
          </button>
        )}
      </div>
    );
  
}