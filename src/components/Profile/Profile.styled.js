import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 10px;
  background-color: var(--primary-background-color);
  width: 360px;
  overflow: hidden;

  :hover {
    box-shadow: 0px 3px 2px 2px rgba(100, 100, 150, 0.15);
  }
`;

export const Description = styled.div`
  padding: 50px;
  text-align: center;
`;

export const Avatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-text-color);
  margin-top: 20px;
`;

export const Tag = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--secondary-text-color);
  margin-top: 10px;
`;

export const Location = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--secondary-text-color);
  margin-top: 10px;
`;

export const Statistics = styled.ul`
  display: flex;
  justify-content: center;
  align-content: space-between;
  list-style: none;
`;

export const StatsElement = styled.li`
  display: block;
  width: 120px;
  background-color: var(--secondary-background-color);
  padding: 25px;

  :hover {
    background-color: var(--primary-background-color);
  }
`;

export const Label = styled.span`
  display: block;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: var(--secondary-text-color);
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-text-color);
  margin-top: 10px;
`;
