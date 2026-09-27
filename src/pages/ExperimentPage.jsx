import { useParams, Link } from "react-router-dom";
import { experiments } from "../data/experiments";
import MagneticButton from "../experiments/magnetic-button/MagneticButton";
import "./ExperimentPage.css";

const demos = {
  "magnetic-button": MagneticButton,
};

export default function ExperimentPage() {
  const { id } = useParams();
  const exp = experiments.find((e) => e.id === id);
  const Demo = demos[id];

  if (!exp) return <p>Experiment not found</p>;

  return (
    <main className="exp-page">
      <header>
        <Link to="/" className="back">← Back to lab</Link>
        <p className="exp-label">EXP. {exp.number} — {exp.tag}</p>
        <h1 className="exp-title">{exp.title}</h1>
      </header>

      <section className="stage">
        {Demo ? <Demo /> : <p className="soon">Coming soon</p>}
      </section>
    </main>
  );
}