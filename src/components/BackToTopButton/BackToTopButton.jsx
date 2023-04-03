import React, { useEffect, useState } from "react";

export default function BackToTopButton({ children }) {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 180,
      behavior: "smooth",
    });
  };

  return <>{backToTopButton && <span onClick={scrollUp}>{children}</span>}</>;
}
