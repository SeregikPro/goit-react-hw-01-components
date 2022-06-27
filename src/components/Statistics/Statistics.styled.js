import styled from 'styled-components';

export const StatSection = styled.section`
  border-radius: 10px;
  background-color: var(--primary-background-color);
  width: 360px;
  overflow: hidden;
  text-align: center;

  :hover {
    box-shadow: 0px 3px 2px 2px rgba(100, 100, 150, 0.15);
  }
`;

export const Title = styled.h2`
  padding: 25px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-content: space-between;
  list-style: none;
`;

export const StatItem = styled.li`
  flex-grow: 1;
  display: block;
  background-color: var(--secondary-background-color);
  padding: 15px 5px;

  :hover {
    background-color: var(--primary-background-color);
  }
`;

export const Label = styled.span`
  display: block;
  text-align: center;
  font-size: 16px;
  color: var(--secondary-text-color);
`;

export const Percentage = styled.span`
  display: block;
  text-align: center;
  font-size: 24px;
  color: var(--primary-text-color);
  margin-top: 10px;
`;
