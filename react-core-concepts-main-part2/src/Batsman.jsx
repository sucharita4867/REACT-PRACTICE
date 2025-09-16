import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const handleSingles = () => {
    const updateRuns = runs + 1;
    setRuns(updateRuns);
  };

  const handleSix = () => {
    const updateRuns = runs + 6;
    const updateSixes = sixes + 1;
    setSixes(updateSixes);
    setRuns(updateRuns);
  };

  return (
    <div>
      <h3>Player: Bangla batsman</h3>
      <p>
        <small>six: {sixes}</small>
      </p>
      {runs > 50 && <p>your Score : 50</p>}
      <h2>Score:{runs}</h2>
      <button onClick={handleSingles}>Singles</button>
      <button>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
