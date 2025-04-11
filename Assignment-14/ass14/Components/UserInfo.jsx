import { useState, useEffect } from "react";
export const UserInfo = () => {
  const [currText, updateText] = useState("");
  const [isDeleting, changeDelet] = useState(false);
  const title = "Hello, I am Nandu Mahesh";
  const [delta, setDelta] = useState(200);
  const period = 1000;
  useEffect(() => {
    let keepUpdating = setInterval(() => {
      let updatedTxt = isDeleting
        ? title.substring(0, currText.length - 1)
        : title.substring(0, currText.length + 1);
      updateText(updatedTxt);
      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }
      if (!isDeleting && updatedTxt === title) {
        changeDelet(true);
        setDelta(period);
      } else if (isDeleting && updatedTxt === "") {
        changeDelet(false);
        setDelta(500);
      }
    }, delta);

    return () => clearInterval(keepUpdating);
  }, [currText]);
  return (
    <div className="userInfo">
      <h1>{currText}</h1>
      <div className="contactDetails">
        <span className="email">📧 nandumahesh2004@gmail.com</span>
        <span className="telephone">☎️ +91 7306788989</span>
        <span className="Home">🏠 Kerala, India</span>
      </div>
      <div className="about">
        <h2>Bio</h2>
        <span className="quote">
          Don't stop when you're tired, stop when you're done.
        </span>
      </div>
    </div>
  );
};
