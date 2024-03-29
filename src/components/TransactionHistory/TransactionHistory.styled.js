import styled from 'styled-components';

export const Table = styled.table`
  color: var(--secondary-text-color);
  background-color: var(--primary-background-color);
  font-size: 14px;
  width: 600px;

  td {
    text-align: center;
    padding: 10px;
    text-transform: capitalize;
  }
  td:first-child {
    text-align: left;
  }

  tr:nth-child(2n) {
    background-color: var(--secondary-background-color);
  }

  :hover {
    box-shadow: 0px 3px 2px 2px rgba(100, 100, 150, 0.15);
  }
`;

export const TableHead = styled.thead`
  color: #fff;
  background-color: var(--accent-color);

  th {
    padding: 10px;
    text-transform: uppercase;
  }
`;
