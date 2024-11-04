import React from 'react';
import SkillCard from '../components/skill-card';
import { faJs, faCss3Alt, faHtml5, faReact} from '@fortawesome/free-brands-svg-icons'; // Importer les icônes
import NotionIcon from '../assets/icons/icons8-notion.svg';
import FigmaIcon from '../assets/icons/icons8-figma.svg';
import SlackIcon from '../assets/icons/icons8-slack.svg';
import GithubIcon from '../assets/icons/icons8-github.svg';
import CanvaIcon from '../assets/icons/icons8-canva.svg';

const Skills = () => {
  return (
    <div>
      <div className="skills">
      <h2>Mes Compétences</h2>
        <div className='skills_skills'>

          <SkillCard 
          skill="JavaScript" 
          level="Intermédiaire" 
          icon={faJs} 
          className="js"
          description="JavaScript a la réputation d'être un langage difficile à appréhender, et je ne peux pas dire que ma courbe d'apprentissage ait été un long fleuve tranquille ! Cela dit, une fois que j'ai commencé à comprendre ses subtilités, j'ai vraiment trouvé le plaisir de créer des applications dynamiques."
          />

          <SkillCard
          skill="React" 
          level="Avancé" 
          icon={faReact}
          className="react" 
          description="Des fonctionnalités comme useState et useEffect m'ont ouvert de nouvelles perspectives sur la gestion de l'état et l'interaction avec des données externes. React est très vite devenu un atout précieux dans ma boîte à outils de développement."
          />

          <SkillCard 
          skill="CSS3" 
          level="Avancé" 
          icon={faCss3Alt} 
          className="css"
          description="Mon approche se concentre sur la performance et la maintenabilité du code en privilégiant SCSS pour garantir des interfaces visuellement attrayantes et réactives. Le CSS et le SCSS ne sont pas de simples outils pour moi ; ce sont des moyens puissants de transformer des idées en réalité visuelle."
          />

          <SkillCard 
          skill="HTML5" 
          level="Avancé" 
          icon={faHtml5} 
          className="html"
          description="Le HTML est le fondement de chaque projet web, même dans le développement moderne avec des frameworks comme React, où il est intégré de manière abstraite. Et j'aborde cette technologie avec une attention particulière. En maîtrisant des outils comme Lighthouse et WAVE, je m'assure que chaque projet corresponds à des attentes élevées en matière d'accessibilité, de référencement et de performance."
          />
          
        </div>
        <div className="skills_tools">

            <p>
              Mais aussi →
            </p>

            <SkillCard 
            skill="Figma" 
            icon={FigmaIcon} 
            />


            <SkillCard 
            skill="Github"
            icon={GithubIcon} 
            />

            <SkillCard
            skill="Notion" 
            icon={NotionIcon}
            />

            <SkillCard
            skill="Canva" 
            icon={CanvaIcon}
            />

            <SkillCard 
            skill="Slack" 
            icon={SlackIcon} 
            />
        </div>
      </div>
    </div>
  );
};

export default Skills;