import zoro from "../public/Images/zoro.png";
import rose from "../public/Images/roses.jpeg";
import car from "../public/Images/carpic.jpg";
export const UserPosts = () => {
  return (
    <div className="posts">
      <h2>User Posts</h2>
      <div className="UserPosts">
        <div className="carousel1">
          <img src={zoro} />
          <div className="stats">
            <span className="views">👁️ 1,001 views</span>
            <span className="likes">❤️ 1,000 likes</span>
            <span className="Shares">✈️ 672 shares</span>
          </div>
        </div>
        <div className="carousel2">
          <img src={rose} />
          <div className="stats">
            <span className="views">👁️ 971 views</span>
            <span className="likes">❤️ 605 likes</span>
            <span className="Shares">✈️ 301 shares</span>
          </div>
        </div>
        <div className="carousel3">
          <img src={car} />
          <div className="stats">
            <span className="views">👁️ 800 views</span>
            <span className="likes">❤️ 599 likes</span>
            <span className="Shares">✈️ 101 shares</span>
          </div>
        </div>
      </div>
    </div>
  );
};
