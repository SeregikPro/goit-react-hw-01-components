import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  width: 300px;
  padding: 15px;
  border-radius: 5px;
  background-color: var(--primary-background-color);

  :hover {
    box-shadow: 0px 3px 2px 2px rgba(100, 100, 150, 0.15);
  }
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => (props.isonline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: 20px;
  color: var(--primary-text-color);
`;
