import userInfo from '../data/user.json';
import dataStatistics from '../data/data.json';
import friendsList from '../data/friends.json';
import transactionItems from '../data/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

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
      <Statistics title="Upload stats" dataStats={dataStatistics} />
      <FriendList friends={friendsList} />
      <TransactionHistory items={transactionItems} />
    </>
  );
};
