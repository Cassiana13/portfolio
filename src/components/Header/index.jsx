import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import "./style.css";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.headerBackground};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: 1rem 10%;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.headerBackground};
  padding: 2rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  gap: 1.5rem;

  @media (min-width: 768px) {
    position: static;
    flex-direction: row;
    background: transparent;
    box-shadow: none;
    padding: 0;
    transform: none;
    gap: 2rem;
    align-items: center;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  padding: 0.5rem 0;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Header = ({ isDark, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo as={Link} to="/">
        Cassiana Caires
      </Logo>

      <MobileMenuButton
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>

      {/*Links de navegação*/}

      <NavLinks open={menuOpen}>
        <NavLink as={Link} to="/about" onClick={() => setMenuOpen(false)}>
          Sobre Mim
        </NavLink>
        <NavLink as={Link} to="/skills" onClick={() => setMenuOpen(false)}>
          Experiência
        </NavLink>
        <NavLink as={Link} to="/projects" onClick={() => setMenuOpen(false)}>
          Projetos
        </NavLink>
        <NavLink as={Link} to="/contact" onClick={() => setMenuOpen(false)}>
          Contato
        </NavLink>

        {/* Botão de alternância de tema (Visível apenas no mobile) */}
        {menuOpen && (
          <ThemeToggle onClick={toggleTheme} aria-label="Alternar tema">
            {isDark ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
        )}
      </NavLinks>

      {/* Botão de tema visível apenas em desktop */}
      <ThemeToggle
        onClick={toggleTheme}
        aria-label="Alternar tema"
        className="desktop-only"
      >
        {isDark ? <FaSun /> : <FaMoon />}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;
