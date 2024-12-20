import head from "./assets/head-circle-outlined.png";

const About = () => {
  return (
    <div className="about-content">
      <div className="left-side">
        <div className="entry contact">
          <img src={head} alt="" />
          <h2>Eu mermo</h2>
          <p>PORIPA MEU, PODE PA. Tem várias coisas que dá pra falar aqui, mas eu não vou falar nada que importe não. Porque daí eu vou ter que ficar pensando o que escrever aqui, sabe? E Eu não to afim de pensar no que escrever aqui, daí então vou escrever qualquer coisa mesmo e já era. Então é isso e é só isso que vai ser mesmo, um monte de nada. Até porque usar lorem ipsum não dá não né, e não ajuda ninguém</p>
            </div>
          <div className="left-right entry">
            <h2>Links e Contato</h2>
            <ul>
              <li><img src="src\assets\icons\icons8-github-100-2.png" alt="" />VecchiR <span class="material-symbols-outlined">open_in_new</span></li>  
              <li><img src="src\assets\icons\icons8-linkedin-100-2.png" alt="" />@rafaelvecchisilva <span class="material-symbols-outlined">open_in_new</span></li>  
              <li><img src="src\assets\icons\icons8-whatsapp-100-2.png" alt="" />+55 (16) 996430-9380 <span class="material-symbols-outlined">open_in_new</span></li>  
              <li><img src="src\assets\icons\icons8-email-100.png" alt="" />contato@rafaelvecchi.com</li>
              <li><img src="src\assets\icons\icons8-location-100.png" alt="" />Campinas, SP</li>  

            </ul>
          </div>  



        
        <div className="entry skills">
          <h2>Skills e Ferramentas</h2>
          <ul>
            <li>Front-end: HTML, CSS, JavaScript (ES6+), React.js</li>
            <li>Back-end: Node.js, Express</li>
            <li>Banco de Dados: SQL</li>
            <li>
              Ferramentas: Git, GitHub, Linux (Ubuntu), PowerBI, Excel avançado,
              Google / Meta Ads
            </li>
            <li>Idiomas: Português (nativo), Inglês (fluente)</li>
          </ul>
        </div>
      </div>

      <div className="right-side">
        <div className="education">
          <h2>Educação e Cursos</h2>

          <div className="entry">
            <h3>Curso de Desenvolvimento Web (Fullstack)</h3>
            <p className="institution">
              <a
                href="https://www.theodinproject.com/paths/full-stack-javascript"
                target="_blank"
              >
                The Odin Project
              </a>
            </p>
            <p className="date">jan 2024 - presente</p>
            <ul>
              <li>HTML, CSS, JavaScript, React.js, Express.js, Node.js, SQL</li>
              <li>
                Foco em desenvolvimento prático através de projetos completos
              </li>
            </ul>
          </div>

          <div className="entry">
            <h3>Bacharelado em Engenharia Elétrica</h3>
            <p className="institution">
              UNESP - Universidade Estadual Paulista, Bauru
            </p>
            <p className="date">2014-2020</p>
            <ul>
              <li>Introdução à programação com C++ e Python</li>
              <li>
                Projeto de conclusão de curso: Desenvolvimento de um protótipo
                de IoT com Arduino para monitoramento e desligamento remoto de
                motores
              </li>
            </ul>
          </div>
        </div>

        <div className="work-exp">
          <h2>Experiência Profissional</h2>

          <div className="entry">
            <h3>
              Atendimento ao Público + Gerenciamento de Campanhas de Anúncios
            </h3>
            <p className="institution">Cookieaholic - Campinas, SP</p>
            <p className="date">2022 - Presente</p>
            <ul>
              <li>
                Apoio na gestão da loja física e desenvolvimento de campanhas de
                marketing digital usando Google Ads e Meta Ads{" "}
              </li>
              <li>
                Experiência direta em atendimento ao cliente, marketing e gestão
                de pequenos negócios
              </li>
            </ul>
          </div>

          <div className="entry">
            <h3>Gestor de Campanhas de Anúncios Online (Meta e Google Ads)</h3>
            <p className="institution">Freelance - Trabalho remoto</p>
            <p className="date">2022 - 2023</p>
            <ul>
              <li>
                Gerenciei campanhas de anúncios pagos no Meta Ads e Google Ads,
                incluindo configurações no Google Tag Manager e análise de dados
                com Google Analytics e Facebook Pixel
              </li>
              <li>
                Atuei em projetos para uma loja de plantas e para a loja de
                cookies da minha esposa, focando em aumentar a audiência e
                conversões de vendas online
              </li>
              <li>
                Destaques:
                <ul>
                  <li>
                    Loja de Cookies: Crescimento exponencial no Instagram,
                    alcançando um público maior através de campanhas focadas em
                    brand awareness
                  </li>
                  <li>
                    Loja de Plantas: Alcançado um ROAS de 250% nos últimos três
                    meses, com destaque para o aumento inesperado nas vendas de
                    terrários
                  </li>
                  <li>
                    Desenvolvi habilidades analíticas e estratégicas para
                    identificar produtos com maior potencial de conversão
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="entry">
            <h3>
              Analista de Oportunidades de Vendas - Digitalized Lead Management
              (DLM)
            </h3>
            <p className="institution">
              Siemens Infraestrutura e Indústria - Jundiaí, SP
            </p>
            <p className="date">2019 - 2022</p>
            <ul>
              <li>
                Monitoramento de portais de pregões eletrônicos e gestão de
                oportunidades de venda para diferentes unidades de negócio da
                Siemens{" "}
              </li>
              <li>
                Responsável pela padronização de registros e análise de dados,
                criação de dashboards e KPIs para monitoramento de performance{" "}
              </li>
              <li>
                Desenvolvimento de processos e workflows para melhorar a
                eficiência da equipe e reduzir gargalos operacionais{" "}
              </li>
              <li>
                Implementação de melhorias na gestão de e-mails da equipe,
                otimizando a organização e o fluxo de informações
              </li>
            </ul>
          </div>

          <div className="entry">
            <h3>Tradutor e Legendador</h3>
            <p className="institution">Amazon AWS - Trabalho remoto</p>
            <p className="date">2018 - 2018</p>
            <ul>
              <li>
                Monitoramento de portais de pregões eletrônicos e gestão de
                oportunidades de venda para diferentes unidades de negócio da
                Siemens
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
