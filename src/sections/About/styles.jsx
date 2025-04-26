import styled from "styled-components";

export const AboutContainer = styled.section`
  padding: 8rem 10%;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  max-width: 300px; /* Tamanho ajustado para não ficar grande */
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  justify-self: center;
  align-self: start; /* A imagem vai ficar no topo */
  object-fit: cover; /* A imagem vai se ajustar ao espaço sem distorcer */
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background: ${({ theme }) => theme.primary};
  }
`;

export const AboutText = styled.div`
  line-height: 1.6;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text}; /* Melhor contraste */
  max-width: 800px;

  p {
    margin-bottom: 2rem;
  }
`;

export const SkillsSection = styled.div`
  margin-top: 3rem;
`;

export const SkillsTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

export const SkillItem = styled.div`
  background: ${({ theme }) => theme.skillBackground};
  padding: 1rem 1.5rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;
