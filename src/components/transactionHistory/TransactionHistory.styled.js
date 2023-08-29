import styled from 'styled-components';

export const TableHistory = styled.table`
  width: 100%;
  margin-top: 15px;
`;

export const TheadHistory = styled.thead`
  background-color: #00bcd5;
  color: #ffffff;
`;

export const StyledTr = styled.tr`
  text-align: center;
  height: 45px;
  transition: transform 0.2s ease-in-out;

  &:nth-child(even) {
    background-color: #ecf1f4;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const ThHistory = styled.th`
  padding: 15px 0px;
`;
