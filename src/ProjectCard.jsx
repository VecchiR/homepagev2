const ProjectCard = ({ project, index }) => {
  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector('div > p').style.opacity = 1;
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector('div > p').style.opacity = 0;

  };
  const handleClick = () => {
    window.open(project.link, "_blank");
  };

  return (
    <div
      key={index}
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} />
        <p>Live Demo!</p>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
