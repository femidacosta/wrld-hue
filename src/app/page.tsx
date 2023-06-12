import "./globals.css";
import "./home.css";
import { Kanit } from "next/font/google";
import "./components/viewcounter/viewcounter";

const kanit = Kanit({ subsets: ["latin"], weight: "100" });

export default function Home() {
  return (
    <section className="hero_container">
      <h1 className={`title ${kanit.className}`}>Femi Da Costa</h1>
      <p className="p">
        explorations through creative experiements, thoughts and expressions. A
        journey with code.
      </p>
    </section>
  );
}
