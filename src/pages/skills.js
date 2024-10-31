import React from 'react';
import SkillCard from '../components/skill-card';
import { faJs, faCss3Alt, faHtml5, faReact } from '@fortawesome/free-brands-svg-icons'; // Importer les icônes

const Skills = () => {
  return (
    <div className="skills">
      <h2>Mes Compétences</h2>
      <div>
        <SkillCard 
        skill="JavaScript" 
        level="Intermédiaire" 
        icon={faJs} 
        description="blablabla"
        className="js-skillcard"
        />
        <SkillCard
        skill="React" 
        level="Avancé" 
        icon={faReact} 
        description="blablabla"
        className="react-skillcard"
        />
        <SkillCard 
        skill="CSS3" 
        level="Avancé" 
        icon={faCss3Alt} 
        description="blablabla"
        className="css-skillcard"
        />
        <SkillCard 
        skill="HTML5" 
        level="Avancé" 
        icon={faHtml5} 
        description="blablabla"
        className="html-skillcard"
        />
      </div>
    </div>
  );
};

export default Skills;