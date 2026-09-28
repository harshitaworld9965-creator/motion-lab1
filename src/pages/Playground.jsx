import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Playground.css";

export default function Playground() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Practise here 👇
      gsap.to(".box", { x: 200, duration: 1 });
    },
    { scope: container }
  );

  return (
    <main className="playground" ref={container}>
      <h1 className="playground-title">Playground</h1>
      <div className="boxes">
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    </main>
  );
}