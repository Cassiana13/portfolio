// src/components/Profile.jsx
import React from "react";
import profileImage from "../../assets/profile.png";
import { ProfileImage } from "./styles";

import "./styles"; // Criaremos este arquivo CSS depois

const Profile = () => {
  return (
    <div className="profile-image-container">
      <ProfileImage
        src={profileImage} // Substitua pelo caminho da sua imagem
        alt="Cassiana"
        className="profile-image"
      />
    </div>
  );
};

export default Profile;
