import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { experiments } from "../data/experiments";
import "./Home.css";
import { Link } from "react-router-dom"

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".home-label", { opacity: 0, y: 10, duration: 0.6 })
        .from(".line-inner", { yPercent: 100, duration: 1.1, stagger: 0.12 }, "-=0.3")
        .from(".home-intro", { opacity: 0, y: 10, duration: 0.6 }, "-=0.6")
        .from(".card", { opacity: 0, y: 40, duration: 0.8, stagger: 0.08 }, "-=0.5");
    },
    { scope: container }
  );

  return (
    <main className="home" ref={container}>
      <header className="home-header">
        <p className="home-label">Motion Lab — Harshita</p>
        <h1 className="home-title">
          <span className="line"><span className="line-inner">Small studies</span></span>
          <span className="line"><span className="line-inner">in <em>movement</em></span></span>
        </h1>
        <p className="home-intro">
          A collection of interaction experiments, each built to learn one idea.
        </p>
      </header>

      <section className="grid">
        {experiments.map((exp) => (
<Link key={exp.id} to={`/lab/${exp.id}`} className="card">

<div className="card-top">
              <span>EXP. {exp.number}</span>
              <span className={exp.status === "Soon" ? "status soon" : "status"}>
                {exp.status}
              </span>
            </div>
            <h2 className="card-title">{exp.title}</h2>
            <p className="card-tag">{exp.tag}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}