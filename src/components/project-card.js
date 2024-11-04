import React, { useRef } from 'react';


const ProjectCard = ({ project }) => {
  const { title, description, videoDesktop, videoMobile, githubLink, layout } = project;

  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  const handleMouseEnter = () => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.play();
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.pause();
      desktopVideoRef.current.currentTime = 0;
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.pause();
      mobileVideoRef.current.currentTime = 0;
    }
  };

  return (
    <div className={`project_card ${layout}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`project_card_vids ${layout}`}>
        <video
          ref={desktopVideoRef}
          src={videoDesktop}
          alt={`${title} desktop`}
          className='project_card_vids_deskvid'
          loop
          muted
        />
        {videoMobile && (
          <video
            ref={mobileVideoRef}
            src={videoMobile}
            alt={`${title} mobile`}
            className='project_card_vids_mobvid'
            loop
            muted
          />
        )}  
      </div>
      <div className='project_card_description'>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
      </div>
    </div>
  );
};

export default ProjectCard;