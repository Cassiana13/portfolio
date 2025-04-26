import React from "react";
import * as S from "./styles";
import profileImage from "../../assets/profile.png"; // Ajuste o caminho

const About = () => {
  return (
    <S.AboutContainer id="about">
      <S.AboutGrid>
        <S.AboutImage src={profileImage} alt="Safet - Desenvolvedor React" />

        <S.AboutContent>
          <S.SectionTitle>Sobre Mim</S.SectionTitle>
          <S.AboutText>
            <p>
              Olá, sou a Cassiana, e minha jornada profissional é marcada por
              uma transição constante, cheia de desafios e aprendizado. Comecei
              minha carreira no mundo das vendas, onde aprendi a lidar com as
              necessidades e particularidades das pessoas. Essa experiência me
              deu uma visão profunda sobre como conectar com as pessoas e
              entender suas necessidades, algo que carrego até hoje. Depois de
              uma breve passagem pelo telemarketing, onde fiquei apenas sete
              meses, decidi me reinventar e busquei um novo caminho. A transição
              para a área de TI foi um divisor de águas na minha trajetória.
              Comecei como analista de suporte técnico, onde, além de resolver
              problemas, aprendi a importância de processos e de um bom
              relacionamento com as pessoas dentro de uma organização. Essa
              experiência me levou a cargos de liderança, e logo me vi como SDM
              (Service Delivery Manager), onde a necessidade de lidar
              diretamente com pessoas e fortalecer os relacionamentos
              profissionais se tornou uma habilidade essencial. A comunicação, a
              gestão de expectativas e o equilíbrio entre as necessidades da
              equipe e dos clientes foram os maiores aprendizados dessa fase.
              Hoje, estou como analista de governança de TI, onde meu papel é
              entender profundamente os processos e identificar oportunidades de
              melhoria. A cada dia, tenho a oportunidade de influenciar
              positivamente a forma como a TI é gerida e integrada às
              necessidades de negócio. Esse cargo me desafia a ser ainda mais
              estratégica e a pensar de forma analítica e inovadora. Além disso,
              minha paixão pelo desenvolvimento de software continua me
              impulsionando a aprender novas tecnologias e a buscar sempre mais
              soluções para otimizar a forma como as coisas funcionam.
            </p>
          </S.AboutText>
        </S.AboutContent>
      </S.AboutGrid>
    </S.AboutContainer>
  );
};

export default About;
