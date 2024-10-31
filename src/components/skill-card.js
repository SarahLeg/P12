import React from 'react';

const SkillCard = ({ skill, level }) => {
  return (
    <div>
      <h3>{skill}</h3>
      <p>Niveau: {level}</p>
    </div>
  );
};

export default SkillCard;