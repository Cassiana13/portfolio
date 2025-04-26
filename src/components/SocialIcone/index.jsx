import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const IconsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const Icon = styled.a`
  color: ${({ theme }) => theme.primary};
  font-size: 1.8rem;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SocialIcons = () => (
  <IconsContainer>
    <Icon href="#">
      <FaGithub />
    </Icon>
    <Icon href="#">
      <FaLinkedin />
    </Icon>
    <Icon href="#">
      <FaTwitter />
    </Icon>
  </IconsContainer>
);

export default SocialIcons;
