import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillCard = ({ skill, level, icon, description }) => {
  return (
    <div className="skill_card">
      {/* Affiche l'icône en utilisant FontAwesome ou une balise <img> pour les SVG personnalisés */}
      {typeof icon === 'object' ? (
        <FontAwesomeIcon icon={icon} className="skill_card_icon" />
      ) : (
        <img src={icon} alt={`${skill} icon`} className="skill_card_icon" />
      )}
      
      <div className="skill_card_description">
        <p>{skill}</p>
        {level && <p>{level}</p>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default SkillCard;