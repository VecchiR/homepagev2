import admindashboard from './assets/admindashboard.png';
import calc from './assets/calc-bigger.png';
import cvapp from './assets/cvapp.png';
import etchasketch from './assets/etchasketch.png';
import library from './assets/library.png';
import pawfecthomepage from './assets/pawfecthomepage.png';
import responsivehomepage from './assets/responsive-homepage.png';
import signupformwithvalidation from './assets/signupformwithvalidation.png';
import sorvete from './assets/sorvete.png';
import tictactoe from './assets/tictactoe.png';
import timedcarousel from './assets/TIMEDAUTO-carrossel-eva.png';
import todolist from './assets/todolist.png';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      title: 'Pawfect Memory',
      description: 'This is a description of Project 1.',
      image: pawfecthomepage,
      link: 'https://memory-card-game-seven-rho.vercel.app/',
      month: 'Oct. 2024',
    },
    {
      title: 'CV Builder',
      description: 'This is a description of Project 2.',
      image: cvapp,
      link: 'https://cv-app-phi-flame.vercel.app/',
      month: 'Sep. 2024',
    },
    {
      title: 'To-Do List',
      description: 'This is a description of Project 3.',
      image: todolist,
      link: 'https://vecchir.github.io/todolist/',
      month: 'May. 2024',
    },
    {
      title: 'Responsive Homepage',
      description: 'This is a description of Project 4.',
      image: responsivehomepage,
      link: 'https://vecchir.github.io/Homepage/',
      month: 'Aug. 2024',
    },
    {
      title: 'Timed Carousel',
      description: 'This is a description of Project 4.',
      image: timedcarousel,
      link: 'https://vecchir.github.io/Ui-element-exercise/',
      month: 'May. 2024',
    },
    {
      title: 'Book Library',
      description: 'This is a description of Project 4.',
      image: library,
      link: 'https://vecchir.github.io/library/',
      month: 'Mar. 2024',
    },
    {
      title: 'Tic-Tac-Toe for 2 players',
      description: 'This is a description of Project 4.',
      image: tictactoe,
      link: 'https://vecchir.github.io/tictactoe/',
      month: 'Mar. 2024',
    },
    {
      title: 'Etch-a-sketch',
      description: 'This is a description of Project 4.',
      image: etchasketch,
      link: 'https://vecchir.github.io/etch-a-sketch/',
      month: 'Jan. 2024',
    },
    {
      title: 'Signup Form (with Validation)',
      description: 'This is a description of Project 4.',
      image: signupformwithvalidation,
      link: 'https://vecchir.github.io/signup-form/',
      month: 'Feb. 2024',
    },
    {
      title: 'Calculator',
      description: 'This is a description of Project 4.',
      image: calc,
      link: 'https://vecchir.github.io/calculator/',
      month: 'Feb. 2024',
    },
    {
      title: 'Ice Cream Shop Website',
      description: 'This is a description of Project 4.',
      image: sorvete,
      link: 'https://vecchir.github.io/restaurant-page/',
      month: 'Apr. 2024',
    },
  ];

  return (
    <>
      <div className="portfolio-description">
        <p>
          Estes são alguns dos projetos que desenvolvi enquanto estudo o The Odin Project. O foco do
          curso é ensinar os fundamentos essenciais para ser um desenvolvedor fullstack, com uma
          abordagem muito prática: desenvolver projetos do zero, sem ter "ninguém segurando a sua
          mão". Ao longo dos últimos meses, tenho concluído pelo menos um projeto por mês, sempre
          buscando aplicar e solidificar o que estou aprendendo. Nem todos os projetos aparecem
          aqui, alguns ficaram fora por serem mais voltados para conceitos teóricos ou backend, como
          algoritmos e recursão. Explore cada um e veja como a prática moldou meu caminho no
          desenvolvimento web.
        </p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
