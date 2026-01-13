import ThreeModel from "./ThreeModel";

function Hero() {
  return (
    <>
    <div className="hero">
      <div className="hero-canvas">
       <ThreeModel />
      </div>

      <div className="hero-content">
        <h1>ASPER CLUB</h1>
        <p>Innovate. Build. Dominate the future with technology.</p>
        <button>Join the Community</button>

      </div>


    </div>

    </>
  );
}

export default Hero;
