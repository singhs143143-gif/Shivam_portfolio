import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronRight,
  Code2,
  Database,
  Mail,
  Menu,
  Moon,
  Send,
  Sun,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Intelligent Banking Transaction & Fraud Detection",
    description:
      "A fraud detection pipeline built in Python using Pandas, NumPy, and Scikit-learn, preprocessing 280K+ banking transactions across 30+ features with SMOTE class imbalance handling and XGBoost classification.",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "SMOTE",
      "Isolation Forest",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "SQL",
    ],
    problem:
      "Detect potentially fraudulent transactions within 280K+ banking records while overcoming severe minority-class imbalance without sacrificing precision.",
    approach:
      "Engineered amount, frequency, time-based, and behavioral features, applied SMOTE to balance classes, and trained/compared Logistic Regression, Random Forest, and XGBoost using 5-fold cross-validation.",
    outcome:
      "Achieved ~94% ROC-AUC with precision, recall, F1-score, and confusion-matrix analysis. Developed SQL and Power BI analytics to visualize fraud patterns and model-generated risk segments.",
  },
  {
    number: "02",
    title: "Customer Churn Prediction & Explainable Analytics",
    description:
      "A machine learning customer churn classification pipeline on 7K+ records and 20+ behavioral/account features, evaluated using 5-fold cross-validation and interpreted with SHAP Explainable AI.",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Logistic Regression",
      "Random Forest",
      "Gradient Boosting",
      "SHAP",
      "LIME",
      "Power BI",
    ],
    problem:
      "Identify customer churn risks early and understand the hidden drivers behind customer attrition to support targeted retention decisions.",
    approach:
      "Performed EDA, missing-value treatment, categorical encoding, feature scaling, and feature selection before training Logistic Regression, Random Forest, and Gradient Boosting models.",
    outcome:
      "Achieved approximately 84% ROC-AUC through 5-fold cross-validation. Applied SHAP Explainable AI to interpret individual predictions and identify key churn drivers, with Power BI dashboards for customer segmentation.",
  },
  {
    number: "03",
    title: "Expense Tracker REST API (In Progress)",
    description:
      "A backend REST API with full CRUD operations for managing users, expense categories, and transactions, featuring JWT-based authentication and relational SQLite/SQLAlchemy schemas.",
    tags: ["Python", "Flask", "SQLite", "SQLAlchemy", "JWT", "Postman", "GitHub"],
    problem:
      "Provide a secure, relational backend system for user registration, multi-tier expense categorization, and aggregated monthly expense summaries.",
    approach:
      "Designed a relational database schema with primary and foreign keys, wrote SQL queries using JOIN and GROUP BY for monthly summaries, and implemented JWT authentication with password hashing.",
    outcome:
      "Added input validation, error handling, and proper HTTP status codes (200, 201, 400, 401, 404). Tested all endpoints with Postman and maintained version control on GitHub.",
  },
];

const skillGroups = [
  { title: "Programming", icon: Code2, skills: ["Python", "SQL", "MySQL", "PostgreSQL", "Flask", "REST APIs", "SQLAlchemy"] },
  { title: "Data Science", icon: BarChart3, skills: ["Pandas", "NumPy", "Data Cleaning", "EDA", "Statistical Analysis", "SMOTE"] },
  { title: "Machine Learning", icon: BrainCircuit, skills: ["Scikit-learn", "XGBoost", "Random Forest", "Gradient Boosting", "Classification", "Regression", "Clustering", "Model Evaluation"] },
  { title: "AI", icon: Database, skills: ["Explainable AI", "SHAP", "LIME", "Predictive Analytics", "PCA", "Isolation Forest"] },
  { title: "Tools", icon: Code2, skills: ["Git", "GitHub", "Postman", "Jupyter Notebook", "Google Colab", "Power BI", "Tableau"] },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setActiveProject(null);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    window.location.href = `mailto:singhs79094@gmail.com?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  };

  return (
    <main className={isLight ? "portfolio light" : "portfolio"}>
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Shivam Singh home">S<span>.</span>S</a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setIsLight(!isLight)} aria-label="Toggle color theme">
            {isLight ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span></span> Available for opportunities</div>
          <p className="intro">Hi, I&apos;m <strong>Shivam Singh</strong></p>
          <h1>Turning data into<br /><em>meaningful direction.</em></h1>
          <p className="hero-description">An aspiring Data Scientist with a strong interest in Data Science, Artificial Intelligence, and Machine Learning.</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">View my projects <ArrowDownRight size={17} /></a>
            <a href="#contact" className="button button-quiet">Contact me <ChevronRight size={17} /></a>
          </div>
          <div className="hero-note"><span></span> B.E Computer Engineering &nbsp;·&nbsp; 7th Semester</div>
        </div>
        <div className="data-visual" aria-label="Abstract data visualization">
          <div className="visual-orbit orbit-one"></div><div className="visual-orbit orbit-two"></div>
          <div className="chart-card card-main">
            <div className="chart-top"><span>ANALYTICS OVERVIEW</span><i></i></div>
            <div className="line-chart"><svg viewBox="0 0 320 126" role="img" aria-label="Rising data trend"><path d="M5 109 C32 101 43 96 61 100 S97 69 115 80 S144 85 163 54 S199 59 215 47 S251 59 271 25 S299 30 316 10" fill="none" stroke="currentColor" strokeWidth="3"/><path d="M5 109 C32 101 43 96 61 100 S97 69 115 80 S144 85 163 54 S199 59 215 47 S251 59 271 25 S299 30 316 10 L316 126 L5 126 Z" fill="url(#gradient)" opacity=".23"/><defs><linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1"><stop stopColor="currentColor"/><stop offset="1" stopColor="currentColor" stopOpacity="0"/></linearGradient></defs></svg></div>
            <div className="chart-legend"><span>Pattern signals</span><b>01 / 03</b></div>
          </div>
          <div className="mini-card card-dot"><span className="pulse-dot"></span><small>LIVE INSIGHT</small><b>Exploration</b></div>
          <div className="mini-card card-stat"><small>CAREER PATH</small><b>Data → AI</b><span>Focused learning</span></div>
          <div className="node n1"></div><div className="node n2"></div><div className="node n3"></div><div className="node n4"></div>
        </div>
      </section>

      <section id="about" className="section-shell about-section">
        <div className="section-label">01 — INTRODUCTION</div>
        <div className="about-layout">
          <div><h2>Curious by nature.<br /><em>Analytical by choice.</em></h2></div>
          <div className="about-content"><p>I am a Computer Engineering undergraduate (7th Semester) with a growing passion for finding clarity in data. My focus is on learning how data analysis, machine learning, and artificial intelligence can be thoughtfully applied to practical problems.</p><p>I&apos;m building my foundation through analytical projects and continuous learning—always interested in asking better questions, exploring patterns, and turning ideas into useful outcomes.</p></div>
        </div>
        <div className="profile-card">
          <div className="profile-item"><span>Education</span><strong>B.E — Computer Engineering</strong></div><div className="profile-item"><span>College</span><strong>Government Engineering College, Palanpur</strong></div><div className="profile-item"><span>Career Focus</span><strong>Data Science · AI · Machine Learning</strong></div>
        </div>
      </section>

      <section id="skills" className="section-shell skills-section">
        <div className="section-heading"><div><div className="section-label">02 — TOOLKIT</div><h2>Built for <em>thoughtful</em><br />problem solving.</h2></div><p>A developing technical foundation, shaped through hands-on exploration and practical learning.</p></div>
        <div className="skills-grid">{skillGroups.map(({ title, icon: Icon, skills }) => <article className="skill-card" key={title}><div className="skill-title"><Icon size={20}/><h3>{title}</h3></div><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
      </section>

      <section className="section-shell focus-section">
        <div className="focus-copy"><div className="section-label">03 — DIRECTION</div><h2>From insight<br />to <em>intelligence.</em></h2><p>My career direction is focused on using data, machine learning, and AI to solve practical problems—one considered question at a time.</p></div>
        <div className="pathway"><div><span>01</span><b>Data Science</b><small>Understand the signal</small></div><i></i><div><span>02</span><b>Machine Learning</b><small>Build the model</small></div><i></i><div><span>03</span><b>Artificial Intelligence</b><small>Apply with purpose</small></div></div>
      </section>

      <section id="projects" className="section-shell projects-section">
        <div className="section-heading"><div><div className="section-label">04 — SELECTED WORK</div><h2>Featured<br /><em>projects.</em></h2></div><p>Three areas of exploration at the intersection of data, patterns, and meaningful decisions.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-top"><span>{project.number}</span><button onClick={() => setActiveProject(project)} aria-label={`View details for ${project.title}`}><ArrowUpRight size={19}/></button></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><button className="details-link" onClick={() => setActiveProject(project)}>View details <ChevronRight size={16}/></button></article>)}</div>
      </section>

      <section id="education" className="section-shell education-section"><div className="section-label">05 — EDUCATION</div><div className="education-card"><div className="education-mark">SS</div><div><span>UNDERGRADUATE / 7TH SEMESTER</span><h2>B.E — Computer Engineering</h2><p>Government Engineering College, Palanpur</p></div><div className="education-line"></div><p className="education-note">Building a strong base in computer engineering while actively developing practical skills in data, machine learning, and AI.</p></div></section>

      <section id="contact" className="section-shell contact-section"><div className="contact-intro"><div className="section-label">06 — CONTACT</div><h2>Let&apos;s make<br />something <em>useful.</em></h2><p>I&apos;m always interested in learning, building data-driven projects, and connecting with people working in Data Science, AI, and Machine Learning.</p><div className="contact-links"><a href="mailto:singhs79094@gmail.com"><Mail size={17}/> singhs79094@gmail.com</a><a href="tel:+919558837436">+91-955-883-7436</a></div></div><form className="contact-form" onSubmit={handleContact}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" rows={4} placeholder="Tell me a little about your idea..." /></label><button type="submit" className="button button-primary">Open email client <Send size={16}/></button><small>Your message will open in your default email client.</small></form></section>

      <footer><a href="#home" className="brand">S<span>.</span>S</a><div><strong>Shivam Singh</strong><p>Data Science &nbsp;|&nbsp; Artificial Intelligence &nbsp;|&nbsp; Machine Learning</p></div><div className="footer-links"><a href="mailto:singhs79094@gmail.com" aria-label="Email Shivam Singh"><Mail size={18}/></a><a href="#contact" aria-label="GitHub profile placeholder" className="brand-mark">GH</a><a href="#contact" aria-label="LinkedIn profile placeholder" className="brand-mark">in</a></div><small>© {new Date().getFullYear()} Shivam Singh. Made with intention.</small></footer>

      {activeProject && <div className="modal-backdrop" onMouseDown={() => setActiveProject(null)} role="presentation"><section className="project-modal" role="dialog" aria-modal="true" aria-label={activeProject.title} onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={20}/></button><span className="modal-number">PROJECT {activeProject.number}</span><h2>{activeProject.title}</h2><div className="modal-details"><div><span>Overview</span><p>{activeProject.description}</p></div><div><span>Problem statement</span><p>{activeProject.problem}</p></div><div><span>Approach</span><p>{activeProject.approach}</p></div><div><span>Expected outcome</span><p>{activeProject.outcome}</p></div></div><div className="tag-list">{activeProject.tags.map((tag) => <span key={tag}><Check size={12}/>{tag}</span>)}</div></section></div>}
    </main>
  );
}
