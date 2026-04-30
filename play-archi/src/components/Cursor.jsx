import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const dot = document.getElementById("play-cursor");
    const ring = document.getElementById("play-cursor-ring");
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0, raf;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };

    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      rx = lerp(rx, mx, 0.1);
      ry = lerp(ry, my, 0.1);
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(tick);

    const grow = () => { ring.style.width = "48px"; ring.style.height = "48px"; ring.style.borderColor = "#E8002D"; };
    const shrink = () => { ring.style.width = "36px"; ring.style.height = "36px"; ring.style.borderColor = "rgba(255,255,255,0.4)"; };

    const addHover = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    };
    addHover();
    const mo = new MutationObserver(addHover);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div
        id="play-cursor"
        className="fixed top-0 left-0 w-2 h-2 bg-play-red rounded-full pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      />
      <div
        id="play-cursor-ring"
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-white/40 pointer-events-none z-[9998]"
        style={{ willChange: "transform", transition: "width .25s, height .25s, border-color .25s" }}
      />
    </>
  );
}
