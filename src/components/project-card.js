// import React from 'react';

// const ProjectCard = ({ project }) => {
//   const { title, description, image, githubLink } = project;

//   return (
//     <div className="project_card">
//       <div className="project_card_imgs">
//         <img src={image} alt={title} className='project_card_content_desk'/>
//         <img src={image} alt={title} className='project_card_content_mob'/>
//       </div>
//       <div className='project_card_content'>
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <a href={githubLink} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

// import React from 'react';

// const ProjectCard = ({ project }) => {
//   const { title, description, videoDesktop, videoMobile, githubLink } = project; // Mise à jour des propriétés

//   return (
//     <div className="project_card">
//       <div className="project_card_imgs">
//         <video
//           src={videoDesktop} // Utilisation de videoDesktop
//           alt={`${title} desktop`}
//           className='project_card_content_desk'
//         />
//         <video
//           src={videoMobile} // Utilisation de videoMobile
//           alt={`${title} mobile`}
//           className='project_card_content_mob'
//         />
//       </div>
//       <div className='project_card_content'>
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <a href={githubLink} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import React, { useRef } from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, videoDesktop, videoMobile, githubLink } = project;

  // Références pour les vidéos
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  // Fonction pour jouer la vidéo sur hover
  const handleMouseEnter = () => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.play();
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.play();
    }
  };

  // Fonction pour mettre la vidéo en pause quand on quitte le hover
  const handleMouseLeave = () => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.pause();
      desktopVideoRef.current.currentTime = 0; // Réinitialiser à zéro si vous le souhaitez
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.pause();
      mobileVideoRef.current.currentTime = 0; // Réinitialiser à zéro si vous le souhaitez
    }
  };

  return (
    <div className="project_card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="project_card_imgs">
        <video
          ref={desktopVideoRef}
          src={videoDesktop}
          alt={`${title} desktop`}
          className='project_card_content_desk'
          loop // Boucle pour la vidéo desktop
          muted
        />
        <video
          ref={mobileVideoRef}
          src={videoMobile}
          alt={`${title} mobile`}
          className='project_card_content_mob'
          loop // Boucle pour la vidéo mobile
          muted
        />
      </div>
      <div className='project_card_content'>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
      </div>
    </div>
  );
};

export default ProjectCard;