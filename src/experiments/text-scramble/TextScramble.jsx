import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./TextScramble.css";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*<>/";
const WORDS = ["Motion", "Design", "Engineer", "Harshita"];

function ScrambleWord({ text }) {
  const el = useRef(null);
  const tween = useRef(null);
  const { contextSafe } = useGSAP();

  const scramble = contextSafe(() => {
    tween.current?.kill();

    const progress = { value: 0 };

    tween.current = gsap.to(progress, {
      value: 1,
      duration: 0.8,
      ease: "none",
      onUpdate: () => {
        const revealed = Math.floor(progress.value * text.length);

        const output = text
          .split("")
          .map((letter, i) => {
            if (i < revealed || letter === " ") return letter;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");

        el.current.textContent = output;
      },
    });
  });

  return (
    <span
      ref={el}
      className="scramble-word"
      onMouseEnter={scramble}
      onClick={scramble}
    >
      {text}
    </span>
  );
}

export default function TextScramble() {
  return (
    <ul className="scramble-list">
      {WORDS.map((word) => (
        <li key={word}>
          <ScrambleWord text={word} />
        </li>
      ))}
    </ul>
  );
}