// src/components/Profile.styles.js
import styled from "styled-components";

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 40%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.primaryLight};
  margin-bottom: 2rem;
  order: -1;

  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 1024px) {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    width: 350px;
    height: 350px;
    margin-bottom: 0;
    order: 0;
  }

  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;
