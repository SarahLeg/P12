import React from 'react';
import Slider from 'react-slick';

//import de toutes les vidéos
import ProjectCard from '../components/project-card';
import BookiDesk from '../assets/videos/BookiDesk.mp4';
import BookiMob from '../assets/videos/BookiMob.mp4';
import OMFDesk from '../assets/videos/OMFDesk.mp4';
import OMFMob from '../assets/videos/OMFMob.mp4';
import KasaDesk from '../assets/videos/KasaDesk.mp4';
import KasaMob from '../assets/videos/KasaMob.mp4';
import ABDesk from '../assets/videos/ABDesk.mp4';
import ABMob from '../assets/videos/ABMob.mp4';
import SophieBDesk from '../assets/videos/SophieBDesk.mp4';


const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

//tableau des projets
  const projects = [
    {
      id: 0,
      title: 'Booki - Agence de Voyage',
      description: 
      "Booki est un projet qui m'a permis d'explorer les fondements du développement web tout en travaillant sur un produit ayant une réelle utilité pour les utilisateur-ices. Ce projet m'a permis de renforcer mes compétences en HTML, CSS et JavaScript, tout en découvrant l'importance de l'accessibilité et du web sémantique.",
      videoDesktop: BookiDesk,
      videoMobile: BookiMob,
      githubLink: 'https://github.com/ton-projet-1',
    },
    {
      id: 1,
      title: 'OhMyFood - Site en mobile first',
      description: "OhMyFood est un projet qui m'a permis de me plonger dans le concept du mobile first, en créant un site responsive destiné aux amateur-ices de gastronomie. J'ai été ravie de relever le défi de concevoir un site qui s'adapte parfaitement aux appareils mobiles, tout en conservant une esthétique attrayante.",
      videoDesktop: OMFDesk,
      videoMobile: OMFMob,
      githubLink: 'https://github.com/ton-projet-2',
      layout: 'right',
    },
    {
      id: 2,
      title: 'Kasa - Locations Immobilières',
      description: "Kasa est un projet axé sur la location immobilière, conçu pour répondre aux besoins des voyageur-euses modernes à la recherche d'un hébergement de qualité. J'ai particulièrement apprécié l'approche centrée sur l'utilisateur-ice, où chaque élément de l'interface visait à faciliter la recherche de propriétés. Créer une expérience fluide et agréable a été un véritable défi, mais aussi une source de motivation.",
      videoDesktop: KasaDesk,
      videoMobile: KasaMob,
      githubLink: 'https://github.com/ton-projet-2',
    },
    {
      id: 3,
      title: 'ArgentBank - Appli Bancaire',
      description: "Le développement d'ArgentBank a été une expérience enrichissante, me permettant d'explorer le secteur bancaire à travers une application moderne. J'ai approfondi mes connaissances en React et en gestion d'état, tout en apprenant à intégrer des APIs pour des fonctionnalités en temps réel.",
      videoDesktop: ABDesk,
      videoMobile: ABMob,
      githubLink: 'https://github.com/ton-projet-2',
      layout: 'right',
    },
    {
      id: 4,
      title: 'Sophie Bluel, Architecte - Son Portfolio ',
      description: "Le projet Sophie Bluel est un portfolio dynamique conçu pour mettre en avant le travail d'une architecte talentueuse. Un des aspects clés de ce projet a été d'ajouter une authentification pour l'administratrice qui permettait d'accéder à une interface différente. J'ai mis en place des fonctionnalités permettant d'ajouter et de supprimer des photos directement depuis cette interface via une modale, offrant ainsi une gestion flexible et efficace du contenu.",
      videoDesktop: SophieBDesk,
      videoMobile: null,
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