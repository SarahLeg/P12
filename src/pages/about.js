import React from 'react';

const About = () => {
  return (
    <section className='about'>
      <div>
        <h2>À propos de moi</h2>
      </div>
      <p className='about_title'> Bienvenue ! <span className="wave-icon">👋</span> </p>
      <p>
        Je suis Sarah, développeuse front-end passionnée. <br/>
        <br/>
        Depuis petite, les écrans – ceux des ordinateurs en particulier – m’ont toujours fascinée. 
        Cette passion est restée intacte au fil des années, et j’ai souvent pris plaisir à "bidouiller" pour redonner vie à un vieux PC ou explorer en profondeur des logiciels.<br/>
        Aujourd'hui, je mets cette curiosité et mon sens de l'expérimentation au service du web, avec pour objectif de concevoir des sites à la fois ludiques et intuitifs.<br/>
        <br/>
        Mon portfolio présente les projets réalisés durant mes études, mais j’ai hâte d'y ajouter des créations personnelles pour explorer plus librement de nouvelles idées !<br/>
        <br/>
        Intrigué.e.s ? Faites un tour et n'hésitez pas à m'écrire !
        {/* <span className='tourabout'>
          {['F', 'a', 'i', 't', 'e', 's', '  ', 'u', 'n', '  ', 't', 'o', 'u', 'r'].map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </span> */}
      </p>
    </section>
  );
};

export default About;