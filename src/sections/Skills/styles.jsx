import styled from "styled-components";

export const SkillsSection = styled.section`
  padding: 5rem 10%;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SkillCategory = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }
`;

export const CategoryIcon = styled.div`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.primary};
`;

export const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SkillItem = styled.li`
  margin-bottom: 1.5rem;
`;

export const SkillLevel = styled.div`
  height: 8px;
  background: ${({ theme }) => theme.progressBackground};
  border-radius: 4px;
  margin-top: 0.5rem;
  position: relative;
`;

export const SkillBar = styled.div`
  height: 100%;
  width: ${(props) => props.level}%;
  background: ${({ theme }) => theme.primary};
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
`;
