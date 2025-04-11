import bmw from "../public/Images/bmw.jpg";
import music from "../src/Images/music.png";
export const Question1 = () => {
  return (
    <div className="q1">
      <div className="q1imgs">
        <h2>Image from public/Images</h2>
        <img src={bmw} />
      </div>
      <div className="q1imgs">
        <h2>Image from src/Images</h2>
        <img src={music} />
      </div>
    </div>
  );
};
