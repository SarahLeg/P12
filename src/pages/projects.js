// // src/components/Projects.js
// import React from 'react';
// import { motion } from 'framer-motion';
// import ProjectCard from '../components/project-card';
// // import BookiDesk from '../assets/images/Booki-desktop.svg';
// // import BookiMob from '../assets/images/Booki-mobile.svg';
// // import OMFDesk from '../assets/images/ohmyfood desktop.png';
// // import OMFMob from '../assets/images/ohmyfood mobile.png';
// import BookiDesk from '../assets/images/booki.png';

// const projects = [
//   {
//     id: 0,
//     title: 'Booki',
//     description: 'Ce projet a été lun de mes premier',
//     image: BookiDesk, // Remplace par l'URL de ton image
//     image: BookiDesk, // Remplace par l'URL de ton image
//     githubLink: 'https://github.com/ton-projet-1'
//   },
//   {
//     id: 1,
//     title: 'Kaza',
//     description: 'Description du projet 2.',
//     image: BookiDesk,
//     // image: OMFMob,
//     githubLink: 'https://github.com/ton-projet-2'
//   },
//   {
//     id: 2,
//     title: 'Projet 3',
//     description: 'Description du projet 2.',
//     image: 'url_to_image_2', // Remplace par l'URL de ton image
//     githubLink: 'https://github.com/ton-projet-2'
//   },
//   {
//     id: 3,
//     title: 'Projet 2',
//     description: 'Description du projet 2.',
//     image: 'url_to_image_2', // Remplace par l'URL de ton image
//     githubLink: 'https://github.com/ton-projet-2'
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="projects">
//         <h2>Mes projets</h2>
//       {projects.map((project, index) => (
//         <motion.div
//           key={project.id}
//           initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Pour l'animation d'entrée
//           animate={{ opacity: 1, x: 0 }} // Position finale
//           exit={{ opacity: 0 }} // Animation de sortie si besoin
//           transition={{ duration: 0.5 }} // Durée de l'animation
//           className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}
//         >
//             <div className='projects_container'>
//             <ProjectCard project={project} />
//             </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Projects;

import React from 'react';
import Slider from 'react-slick';
import ProjectCard from '../components/project-card';
import BookiDesk from '../assets/videos/BookiDesk.mp4'; // Chemin correct
import BookiMob from '../assets/videos/BookiMob.mp4';
// import KazaDesk from '../assets/videos/KazaDesk.mp4';
// import KazaMob from '../assets/videos/KazaMob.mp4';

const Projects = () => {

  const handleAfterChange = (current) => {
    // Stoppez la lecture des vidéos de la diapositive précédente
    if (desktopVideoRef.current) {
      desktopVideoRef.current.pause();
      desktopVideoRef.current.currentTime = 0; // Remettez à zéro si nécessaire
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.pause();
      mobileVideoRef.current.currentTime = 0; // Remettez à zéro si nécessaire
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: handleAfterChange,
  };

  const projects = [
    {
      id: 0,
      title: 'Booki',
      description: 'Ce projet a été l’un de mes premiers.',
      videoDesktop: BookiDesk, // Utilisation de videoDesktop au lieu de images.desktop
      videoMobile: BookiMob,   // Utilisation de videoMobile au lieu de images.mobile
      githubLink: 'https://github.com/ton-projet-1',
    },
    {
      id: 1,
      title: 'Kaza',
      description: 'Description du projet Kaza.',
      // videoDesktop: KazaDesk,
      // videoMobile: KazaMob,
      githubLink: 'https://github.com/ton-projet-2',
    },
  ];

  return (
    <div className="projects">
      <h2>Mes projets</h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;