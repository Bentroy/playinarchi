import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // stagger siblings
            const siblings = Array.from(
              entry.target.parentElement?.querySelectorAll(".reveal, .reveal-left, .reveal-right") || []
            );
            const idx = siblings.indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add("active");
            }, idx * 90);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}
