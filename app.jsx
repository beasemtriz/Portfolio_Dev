const { useState, useEffect, useRef } = React;

const typewriterWords = [
  "Dev Full Stack",
  "Estudante de ADS",
  "Apaixonada por sites bonitos",
  "Amante de coisas fofas ✨",
];

const navItems = [
  { label: "início", href: "#home" },
  { label: "sobre", href: "#sobre" },
  { label: "skills", href: "#skills" },
  { label: "projetos", href: "#projetos" },
  { label: "contato", href: "#contato" },
];

const skillsList = [
  { emoji: "🌐", name: "HTML5" },
  { emoji: "🎨", name: "CSS3" },
  { emoji: "⚡", name: "JavaScript" },
  { emoji: "⚛️", name: "React" },
  { emoji: "🎀", name: "Bootstrap" },
  { emoji: "🗂️", name: "Git & GitHub" },
  { emoji: "🐍", name: "Python" },
  { emoji: "⚙️", name: "C/C++" },
];

const projectsList = [
  {
    emoji: "🌙",
    title: "Em breve",
    description: "Espaço reservado pro próximo projeto da coleção. 🎀",
    tags: ["novidade"],
    link: "#",
    comingSoon: true,
  },
  {
    emoji: "🍡",
    title: "Em breve",
    description: "Espaço reservado pro próximo projeto da coleção. 🎀",
    tags: ["novidade"],
    link: "#",
    comingSoon: true,
  },
  {
    emoji: "🎐",
    title: "Em breve",
    description: "Espaço reservado pro próximo projeto da coleção. 🎀",
    tags: ["novidade"],
    link: "#",
    comingSoon: true,
  },
  {
    emoji: "🧁",
    title: "Em breve",
    description: "Espaço reservado pro próximo projeto da coleção. 🎀",
    tags: ["novidade"],
    link: "#",
    comingSoon: true,
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar navbar-expand-lg navbar-light sticky-top app-navbar">
      <div className="container d-flex align-items-center justify-content-between py-2">
        <a href="#home" className="logo">
          bea<span>.dev</span> 🌸
        </a>

        <button
          className="menu-toggle d-lg-none"
          aria-label="Abrir menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isOpen ? "open" : ""} d-lg-flex`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex];
    let speed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.substring(0, text.length + 1);
        setText(nextText);
        if (nextText === currentWord) {
          speed = 1400;
          setTimeout(() => setIsDeleting(true), speed);
        }
      } else {
        const nextText = currentWord.substring(0, text.length - 1);
        setText(nextText);
        if (nextText === "") {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % typewriterWords.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <p className="eyebrow">✨ olá, seja bem-vindo(a) ao meu cantinho!</p>
            <h1 className="hero-title">
              Eu sou a <span className="highlight">Bea</span> <br />
              <span className="typewriter">{text}</span>
              <span className="cursor">|</span>
            </h1>
            <p className="hero-text">
              Estudante de Análise e Desenvolvimento de Sistemas, apaixonada por
              transformar código em coisinhas bonitas e funcionais. Aqui você
              encontra um pouco dos meus projetos, skills e formas de me chamar
              pra trocar uma ideia 💌
            </p>
            <div className="hero-buttons">
              <a href="#projetos" className="btn btn-primary btn-lg rounded-pill me-3">
                Ver projetos 🍬
              </a>
              <a href="#contato" className="btn btn-outline-primary btn-lg rounded-pill">
                Entre em contato 🎀
              </a>
            </div>
          </div>

          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <div className="avatar">
            <img src="assets/minha-foto.jpg" alt="Foto de Bea e Pandora" className="avatar-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    { emoji: "🎓", title: "Formação", text: "Análise e Desenvolvimento de Sistemas" },
    { emoji: "💻", title: "Foco", text: "Desenvolvimento Full Stack & CyberSec" },
    { emoji: "🌸", title: "Objetivo", text: "Atuar em Dev / DevOps" },
  ];

  return (
    <section id="sobre" className="section">
      <div className="container">
        <p className="section-tag">sobre mim</p>
        <h2 className="section-title">um pouquinho da minha história 🌷</h2>

        <div className="row g-4">
          <div className="col-lg-6">
            <p className="about-text">
              Tenho 23 anos, moro no Rio de Janeiro e sou estudante de Análise e
              Desenvolvimento de Sistemas pela FAETERJ-Rio. Vivo entre linhas de código,
              xícaras de café e telas cheias de post-its. Adoro Aprender e sou apaixonada
              por designs bonitos e fofinhos!
              <br />
              <br />
              Atualmente estou de olho em oportunidades de estágio na área de
              desenvolvimento e tecnologia, mas também estou aberta a trabalhos freelance.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="row g-3">
              {cards.map((card) => (
                <div className="col-12" key={card.title}>
                  <div className="mini-card">
                    <span className="mini-card-emoji">{card.emoji}</span>
                    <p className="mb-0">
                      <strong>{card.title}</strong>
                      <br />
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillChip({ emoji, name }) {
  return (
    <span className="badge skill-chip">
      {emoji} {name}
    </span>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <p className="section-tag">habilidades</p>
        <h2 className="section-title">minhas ferramentas favoritas 🧸</h2>

        <div className="skills-grid">
          {skillsList.map((skill) => (
            <SkillChip key={skill.name} emoji={skill.emoji} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ emoji, title, description, tags, link, comingSoon }) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className={`card project-card h-100 ${comingSoon ? "project-card-soon" : ""}`}>
        <div className="card-body d-flex flex-column">
          <span className="project-emoji">{emoji}</span>
          <h3 className="card-title">{title}</h3>
          <p className="card-text flex-grow-1">{description}</p>

          <div className="project-tags mb-2">
            {tags.map((tag) => (
              <span key={tag} className="badge tag-badge">
                {tag}
              </span>
            ))}
          </div>

          {!comingSoon && (
            <a href={link} className="project-link" target="_blank" rel="noreferrer">
              ver projeto →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <p className="section-tag">projetos</p>
        <h2 className="section-title">coisinhas que eu criei 🎀</h2>

        <div className="row g-4">
          {projectsList.map((project) => (
            <ProjectCard key={project.title + project.emoji} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { emoji: "✉️", label: "email", href: "ana.beatrizvieiramtc@gmail.com" },
    { emoji: "💼", label: "linkedin", href: "https://www.linkedin.com/in/beasemtriz" },
    { emoji: "🐙", label: "github", href: "https://github.com/beasemtriz" },
  ];

  return (
    <section id="contato" className="section section-contact text-center">
      <div className="container">
        <p className="section-tag">contato</p>
        <h2 className="section-title">vamos conversar? 💌</h2>
        <p className="contact-text mx-auto">
          Tô sempre aberta a trocar uma ideia sobre projetos, oportunidades de
          estágio ou só pra falar sobre tecnologia (ou gatinhos). Me chama! 🐾
        </p>

        <div className="contact-links">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="contact-pill">
              {link.emoji} {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer text-center">
      <p className="mb-0">feito com 💗 e muito café &mdash; {year}</p>
    </footer>
  );
}

function App() {
  return (
    <React.Fragment>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
