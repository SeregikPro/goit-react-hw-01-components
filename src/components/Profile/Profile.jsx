import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Avatar,
  UserName,
  Tag,
  Location,
  Statistics,
  StatsElement,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="Avatar" />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Statistics>
        <StatsElement>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsElement>
        <StatsElement>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsElement>
        <StatsElement>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsElement>
      </Statistics>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
