import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./MagneticButton.css";

export default function MagneticButton() {
  const field = useRef(null);
  const button = useRef(null);
  const label = useRef(null);

  const { contextSafe } = useGSAP({ scope: field });

  const handleMove = contextSafe((e) => {
    const rect = field.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    gsap.to(button.current, { x: x * 0.35, y: y * 0.35, duration: 0.4, ease: "power3.out" });
    gsap.to(label.current, { x: x * 0.15, y: y * 0.15, duration: 0.4, ease: "power3.out" });
  });

  const handleLeave = contextSafe(() => {
    gsap.to([button.current, label.current], {
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  });

  return (
    <div
      ref={field}
      className="magnetic-field"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <button ref={button} className="magnetic">
        <span ref={label} className="magnetic-label">Hover me</span>
      </button>
    </div>
  );
}