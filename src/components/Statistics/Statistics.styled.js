import styled from 'styled-components';

export const StatSection = styled.section`
  margin: 8px;
  width: 360px;
  text-align: center;
  color: var(--mid-text-color);
  background-color: var(--light-back-color);
`;
export const Title = styled.h2`
  display: block;
  margin: 0 auto;
  padding: 25px;
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: baseline;
  align-content: space-between;
`;
export const StatItem = styled.li`
  flex-grow: 1;
  display: block;
  color: var(--light-text-color);
  background-color: ${props => props.generatedColor};
  padding: 16px 5px;
  border-top: 1px var(--mid-back-color) solid;
`;
export const Label = styled.span`
  display: block;
  font-size: 14px;
`;
export const Percentage = styled.span`
  display: block;
  font-size: 24px;
`;
