import React from "react";
import {
  HeroContainer,
  HeroContent,
  ProfileImage,
  ContactButton,
  Profession,
  Name,
  MobileMenuButton,
  NavLink,
  NavLinks,
  Greeting,
  SocialIcon,
  SocialIcons,
  Navigation,
} from "./styles";

import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "../../assets/profile.png";

const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <HeroContainer id="home">
      <Navigation>
        <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </MobileMenuButton>
        <NavLinks style={{ display: menuOpen ? "flex" : "none" }}>
          <NavLink href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink href="#about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </NavLink>
          <NavLink href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>
          <NavLink href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </NavLinks>
      </Navigation>

      <HeroContent>
        <ProfileImage src={profileImage} alt="Developer" />
        <Greeting>Olá,</Greeting>
        <Name>
          <TypeAnimation
            sequence={["Sou a Cassiana", 1000, "Cassiana Caires", 1000]}
            speed={30}
            repeat={Infinity}
          />
        </Name>
        <Profession>Developer</Profession>

        <p
          style={{
            fontSize: "1.1rem",
            marginTop: "0.5rem",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Entre uma filha, uma reunião e um café... sempre tem tempo pra codar.
        </p>

        <ContactButton
          href="https://wa.me/19995214524"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contato
        </ContactButton>
        <SocialIcons>
          <SocialIcon
            href="https://github.com/cassiana13"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/cassiana-caires-186a1122b/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon
            href="mailto:cassianacaires13@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </SocialIcon>
        </SocialIcons>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
