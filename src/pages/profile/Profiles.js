// ProfileCard.js

import React from 'react';

const styles = {
  profileCard: {
    width: '300px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    margin: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  profileImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  profileInfo: {
    padding: '16px',
    textAlign: 'center',
  },
  heading: {
    margin: '0',
    color: '#333',
  },
  paragraph: {
    margin: '8px 0',
    color: '#777',
  },
};

const Profiles = ({ name, occupation, imageSrc }) => {
  return (
    <div style={styles.profileCard}>
      <img src={imageSrc} alt="Profile" style={styles.profileImage} />
      <div style={styles.profileInfo}>
        <h2 style={styles.heading}>{name}</h2>
        <p style={styles.paragraph}>{occupation}</p>
      </div>
    </div>
  );
};

export default Profiles;
