import { createRef, useEffect, useState, useCallback } from "react";

export const useHome = () => {
  const firstRef = createRef(null);
  const aboutRef = createRef(null);
  const worksRef = createRef(null);

  useEffect(() => {
    if (!firstRef.current || !aboutRef.current || !worksRef.current) return;

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const arr = [firstRef.current, aboutRef.current, worksRef.current];
      arr.forEach((value) => {
        const top = value?.offsetTop;
        const bottom = top + value?.offsetHeight;

        if (top <= scrollTop && bottom >= scrollTop) {
          window.location.hash = value.dataset.id;
        }
      });
    });
  }, []);
  return { firstRef, aboutRef, worksRef };
};
