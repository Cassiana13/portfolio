import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  padding: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export default function NavLink({ to, children }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}
