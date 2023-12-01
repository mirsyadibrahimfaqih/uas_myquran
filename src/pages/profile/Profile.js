import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const ProfileCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  margin-bottom: 15px;
  width: 180px;
  height: 180px;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  max-width: 300px;
  margin-left: 20px; 

  @media (max-width: 768px) {
    margin-left: 0; 
    margin-top: 15px; 
  }
`;

const ProfileName = styled.h2`
  margin-bottom: 8px;
  color: #3498db;
`;

const Profiles = () => {
  const profileDataArray = [
    {
      name: "ALdi Budiansah",
      username: "AldiBudi",
      email: "aldithursina05@gmail.com",
      bio: "I am a student studying at PeTIK II Jombang and I really want to learn about IT here",
      profilePicture: "/budi.jpg",
    },
    {
      name: "Mohamad Irsyad Ibrahim Faqih",
      username: "Irsyad",
      email: "mirsyadibrahimfaqih1@gmail.com",
      bio: "I am a student studying at PeTIK II Jombang and I really want to learn about IT here",
      profilePicture: "/irsyad.jpg",
    },
    {
      name: "Hilman Fadilah",
      username: "Hilman",
      email: "hilman123@gmail.com",
      bio: "I am a student studying at PeTIK II Jombang and I really want to learn about IT here",
      profilePicture: "/12.png",
    },
  ];

  return (
    <div>
      {profileDataArray.map((profileData, index) => (
        <ProfileCard key={index}>
        <Fade>
        <ProfilePicture src={profileData.profilePicture} alt="Profile" />
        </Fade>
        <Fade top>
        <ProfileInfo>
            <ProfileName>{profileData.name}</ProfileName>
            <p>@{profileData.username}</p>
            <p>Email: {profileData.email}</p>
            <p>Bio: {profileData.bio}</p>
          </ProfileInfo>
          </Fade>
        </ProfileCard>
      ))}
    </div>
  );
};

export default Profiles;
