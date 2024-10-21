import { Card } from "./card";
import "./cards.css";

export const Cards = () => {
  const cards = Array.from(document.querySelectorAll(".card"));

  const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div onMouseMove={mouseMove} className="cards">
      <Card />
      <Card />
      <Card />
    </div>
  );
};
