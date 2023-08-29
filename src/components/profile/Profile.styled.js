import styled from 'styled-components';

export const ProfileContainer = styled.div`
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  width: 390px;
  margin: 15px auto 60px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05) rotate(3deg);
    cursor: pointer;
  }
`;

export const Description = styled.div`
  text-align: center;
  padding: 30px;
`;

export const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const Name = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin: 16px;
`;

export const Tag = styled.span`
  color: rgb(141, 141, 141);
  font-weight: 500;
`;

export const Location = styled.span`
  color: rgb(141, 141, 141);
  font-weight: 500;
`;

export const StatsContainer = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #f3f6f9;
  border-top: 1px solid rgb(227, 227, 227);
`;

export const StatItem = styled.li`
  text-align: center;
  padding: 20px;
  width: 100%;
  list-style: none;

  &:not(:last-child) {
    border-right: 1px solid rgb(227, 227, 227);
  }
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(123, 123, 123);
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
