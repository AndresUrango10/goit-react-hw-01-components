import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;
  margin: 20px;
  width: 330px;
  border-radius: 65px;
  border: 1px solid rgb(227, 227, 227);
  box-shadow: 8px 0 38px -22px rgba(0, 0, 0, 0.39);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const AvatarImg = styled.img`
  height: 100px;
  width: 66px;
`;

export const Name = styled.p`
  margin-right: 20px;
  font-size: 30px;
  font-weight: 700;
`;

export const Status = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: green;
`;
