import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillCard = ({ skill, level, icon, description }) => {
  return (
    <div className="skill_card">
      <FontAwesomeIcon icon={icon} className="skill_card_icon" />
      <div className="skill_card_description">
        <p>{skill}</p>
        <p>{level}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;