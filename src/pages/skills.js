import React from 'react';
import SkillCard from '../components/skill-card'; // Importer le composant SkillCard

const skills = [
  { id: 1, skill: 'JavaScript', level: 'Avancé' },
  { id: 2, skill: 'React', level: 'Intermédiaire' },
  { id: 3, skill: 'CSS', level: 'Avancé' },
  { id: 4, skill: 'HTML', level: 'Expert' },
  // Ajoute d'autres compétences si nécessaire
];

const Projects = () => {
  return (
    <div className="skills">
      <h2>Mes Compétences</h2>
      <div className="skills-grid">
        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
      </div>
    </div>
  );
};

export default Projects;