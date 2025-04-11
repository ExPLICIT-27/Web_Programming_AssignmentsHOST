import "./ProfilePage.css";
import { ProfileImage } from "../Components/ProfileImage.jsx";
import { UserInfo } from "../Components/UserInfo.jsx";
import { UserPosts } from "../Components/UserPosts.jsx";
function ProfilePage() {
  return (
    <div className="mainPage">
      <ProfileImage />
      <UserInfo />
      <UserPosts />
    </div>
  );
}
export default ProfilePage;
