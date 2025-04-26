import React from "react";
import * as S from "./styles";
import { FaCode, FaPalette, FaServer, FaTools } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaPalette />,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "REST APIs", level: 80 },
      ],
    },
    {
      title: "Ferramentas",
      icon: <FaTools />,
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 70 },
      ],
    },
  ];

  return (
    <S.SkillsSection id="skills">
      <S.SectionHeader>
        <h2>Minhas Habilidades</h2>
        <p>Tecnologias e ferramentas que utilizo</p>
      </S.SectionHeader>

      <S.SkillsContainer>
        {skillCategories.map((category, index) => (
          <S.SkillCategory key={index}>
            <S.CategoryHeader>
              <S.CategoryIcon>{category.icon}</S.CategoryIcon>
              <h3>{category.title}</h3>
            </S.CategoryHeader>
            <S.SkillsList>
              {category.skills.map((skill, skillIndex) => (
                <S.SkillItem key={skillIndex}>
                  <span>{skill.name}</span>
                  <S.SkillLevel level={skill.level}>
                    <S.SkillBar level={skill.level} />
                  </S.SkillLevel>
                </S.SkillItem>
              ))}
            </S.SkillsList>
          </S.SkillCategory>
        ))}
      </S.SkillsContainer>
    </S.SkillsSection>
  );
};

export default Skills;
