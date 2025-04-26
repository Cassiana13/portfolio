import styled from "styled-components";

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 5% 40px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 0 10%;
  }
`;

export const Navigation = styled.nav`
  position: absolute;
  top: 20px;
  left: 5%;
  right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  @media (min-width: 768px) {
    top: 40px;
    left: 10%;
    right: 10%;
  }
`;

export const NavLinks = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
  }

  @media (min-width: 1024px) {
    gap: 30px;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;

export const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 2;

  @media (min-width: 1024px) {
    max-width: 600px;
    align-items: flex-start;
    text-align: left;
  }
`;

export const Greeting = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.8rem;
  text-decoration: none; // garante que não tenha sublinhado

  @media (min-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }
`;

export const Name = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`;
export const Profession = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.textSecondary};

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

export const ContactButton = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 1rem;
  font-size: 0.9rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    padding: 12px 30px;
    font-size: 1rem;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 2rem;

  @media (min-width: 768px) {
    gap: 20px;
    margin-top: 3rem;
  }
`;

export const SocialIcon = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

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
