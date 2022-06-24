import { Profile } from "./Profile/Profile";
import userInfo from 'user.json';

export const App = () => {
  return (
    <div>
      <Profile info={ userInfo } />
    </div>
  );
};
