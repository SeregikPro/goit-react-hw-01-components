import { Profile } from "./Profile/Profile";
import userInfo from 'user.json';

export const App = () => {
  return (
    <>
      <Profile
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
    </>
  );
};
