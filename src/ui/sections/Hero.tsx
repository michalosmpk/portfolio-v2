import { useEffect } from "preact/hooks";
import "../../assets/scss/sections/Hero.scss";

export const Hero = () => {
  const name = "Michał-Kaszak";
  const nameLength = name.length;
  useEffect(() => {
    for (let i = 0; i < nameLength; i++) {
      const letter = document.getElementById(`name-letter-${i}`);
      if (letter) {
        letter.style.opacity = "0.2";
        const randomX = Math.random() * (Math.random() > 0.5 ? 1 : -1);
        const randomY = Math.random() * (Math.random() > 0.5 ? 1 : -1);
        const randomDirection = `translateX(${600 * randomX}vw) translateY(${
          600 * randomY
        }vw)`;
        console.log("randomDirection", randomDirection);
        letter.style.transform = randomDirection;
      }
    }
    setTimeout(() => {
      for (let i = 0; i < nameLength; i++) {
        const letter = document.getElementById(`name-letter-${i}`);
        const timingFunction = "cubic-bezier(0.1,0.8,0.1,1.05)";
        const timingLength = (Math.random() * 2 + 3) / 1.8;
        // const timingLength = 3;
        if (letter) {
          setTimeout(() => {
            letter.style.transition = `transform ${timingLength}s ${timingFunction}, scale ${timingLength}s ${timingFunction}`;
            letter.style.opacity = "1";
            letter.style.transform = "translateX(0) translateY(0)";
            letter.style.scale = "1";
          }, i * 20 + Math.random() * 50 + 100);
        }
      }
    }, 600);
  }, []);
  return (
    <div className="Hero">
      <div className="Hero__Name">
        {name.split("").map((letter, index) => (
          <span id={`name-letter-${index}`} key={index}>
            {letter === "-" ? "  " : letter}
          </span>
        ))}
      </div>
    </div>
  );
};
