import styled from 'styled-components';

export const StatisticsSection = styled.section`
  margin: 15px auto 60px;
  border: 1px solid rgb(227, 227, 227);
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  width: 430px;
`;

export const Title = styled.h2`
  text-align: center;
  padding: 30px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  padding: 13px 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 7px;

  &:hover {
    cursor: pointer;
  }
`;

export const Label = styled.span`
  color: white;
  display: block;
  text-shadow: 1px 1px 2px rgb(106, 106, 106), -1px -1px 2px rgb(106, 106, 106);
`;

export const Percentage = styled.span`
  color: white;
  text-shadow: 1px 1px 2px rgb(106, 106, 106), -1px -1px 2px rgb(106, 106, 106);
  font-size: 20px;
  transition: transform 0.3s ease-in-out;

  ${Item}:hover & {
    transform: rotate(-20deg);
  }
`;
