import React from "react";
import styled from "styled-components";

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  padding: 1.5rem;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Projects = () => {
  const projects = [
    { title: "Projeto 1", description: "Descrição breve..." },
    // Adicione seus projetos
  ];

  return (
    <section id="projects">
      <Title>Projetos</Title>
      <div style={{ display: "grid", gap: "2rem" }}>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
