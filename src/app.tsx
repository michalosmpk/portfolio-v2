import { useEffect } from "preact/hooks";
// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
import { Header } from "./ui/components/Header";
import { Hero } from "./ui/sections/Hero";
import "./assets/scss/index.scss";

export function App() {
  useEffect(() => {
    // Set the initial brightness to 0%
    // document.body.style.filter = 'brightness(0%)';
    document.body.style.transition = "filter 5.25s ease-in-out";

    // Change brightness to 100% after the component mounts
    setTimeout(() => {
      document.body.style.filter = "brightness(100%)";
    }, 100);
  }, []);

  return (
    <>
      <Hero />
    </>
  );
}
