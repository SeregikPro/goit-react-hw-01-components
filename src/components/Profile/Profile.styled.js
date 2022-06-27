import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid var(--accent-color);
  border-radius: 10px;

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
  /* flex-wrap: nowrap; */
  justify-content: center;
  align-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--accent-color);
`;

export const StatsElement = styled.li`
  display: block;
  width: 120px;
  background-color: rgb(250, 250, 250);
  padding: 25px;

  :not(:last-child) {
    border-right: 1px solid var(--accent-color);
  }
  :hover {
    background-color: #fff;
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
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-text-color);
  margin-top: 10px;
`;
