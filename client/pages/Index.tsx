import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Phone,
  Send,
  Sparkles,
  Sun,
  Terminal,
  X,
} from "lucide-react";

interface Project {
  number: string;
  title: string;
  badge: string;
  badgeType?: "default" | "progress";
  metric: string;
  description: string;
  tags: string[];
  highlights: string[];
  problem: string;
  approach: string;
  outcome: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Intelligent Banking Transaction & Fraud Detection",
    badge: "~94% ROC-AUC",
    badgeType: "default",
    metric: "280K+ Transactions · 30+ Features · SMOTE",
    description:
      "A machine learning fraud detection pipeline in Python processing 280K+ banking transactions across 30+ features, handling severe class imbalance with SMOTE and achieving ~94% ROC-AUC.",
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
    highlights: [
      "Built a fraud detection pipeline in Python using Pandas, NumPy, and Scikit-learn, preprocessing 280K+ banking transactions across 30+ features for exploratory and behavioral analysis.",
      "Engineered transaction amount, frequency, time-based, and behavioral features and handled class imbalance using SMOTE, improving minority-class detection across multiple classification models.",
      "Compared Logistic Regression, Random Forest, and XGBoost using 5-fold cross-validation, achieving ~94% ROC-AUC with precision, recall, F1-score, and confusion-matrix analysis.",
      "Developed SQL and Power BI analytics to visualize fraud patterns, transaction distributions, customer behavior, and model-generated risk segments.",
    ],
    problem:
      "Identify high-risk fraudulent banking transactions within heavily skewed transaction streams without overlooking rare minority-class fraud patterns.",
    approach:
      "Engineered 30+ temporal and behavioral features, balanced class distribution using SMOTE, and conducted 5-fold cross-validation across Logistic Regression, Random Forest, and XGBoost.",
    outcome:
      "Achieved ~94% ROC-AUC with verified precision, recall, F1-score, and confusion-matrix analysis, coupled with Power BI and SQL dashboards for fraud pattern visualization.",
  },
  {
    number: "02",
    title: "Customer Churn Prediction & Explainable Analytics",
    badge: "~84% ROC-AUC",
    badgeType: "default",
    metric: "7K+ Records · 20+ Features · SHAP XAI",
    description:
      "A customer churn classification workflow trained on 7K+ records achieving ~84% ROC-AUC, enhanced with SHAP Explainable AI and Power BI for customer segmentation and retention insights.",
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
    highlights: [
      "Developed a customer churn classification pipeline using Python, Pandas, NumPy, and Scikit-learn on 7K+ customer records and 20+ behavioral/account features.",
      "Performed EDA, missing-value treatment, categorical encoding, feature scaling, and feature selection before training Logistic Regression, Random Forest, and Gradient Boosting models.",
      "Achieved approximately 84% ROC-AUC through 5-fold cross-validation, evaluating models using precision, recall, F1-score, ROC-AUC, and confusion matrices.",
      "Applied SHAP Explainable AI to interpret individual predictions and identify key churn drivers, with Power BI dashboards for customer segmentation and risk analysis.",
    ],
    problem:
      "Anticipate customer attrition in advance while providing transparent, human-interpretable explanations of the underlying drivers to guide retention action.",
    approach:
      "Executed end-to-end EDA, imputation, encoding, and scaling on 20+ behavioral/account features, trained ensemble models under 5-fold CV, and integrated SHAP for local and global model interpretation.",
    outcome:
      "Attained ~84% ROC-AUC alongside actionable SHAP attribution insights and Power BI risk segmentation dashboards to proactively curb churn.",
  },
  {
    number: "03",
    title: "Expense Tracker REST API",
    badge: "In Progress",
    badgeType: "progress",
    metric: "Flask · SQLAlchemy · JWT Auth · Postman",
    description:
      "A REST API backend with full CRUD operations for personal finance management, JWT-based user authentication, password hashing, and relational SQLite/SQLAlchemy schemas.",
    tags: [
      "Python",
      "Flask",
      "SQLite",
      "SQLAlchemy",
      "JWT",
      "Postman",
      "REST APIs",
      "GitHub",
    ],
    highlights: [
      "Developed a REST API with full CRUD operations for managing users, expense categories and transactions.",
      "Implemented user registration and login with JWT-based authentication and password hashing.",
      "Designed a relational database schema with primary and foreign keys and wrote SQL queries using JOIN and GROUP BY for monthly expense summaries.",
      "Added input validation, error handling and proper HTTP status codes (200, 201, 400, 401, 404).",
      "Tested all endpoints with Postman and maintained version control on GitHub.",
    ],
    problem:
      "Architect a secure, reliable backend API to handle user accounts, hierarchical expense categories, and monthly aggregated financial reporting.",
    approach:
      "Constructed normalized relational tables with foreign keys via SQLAlchemy ORM, secured endpoints with JSON Web Tokens and password hashing, and tested endpoints thoroughly using Postman.",
    outcome:
      "Delivered a structured REST API with strict input validation, correct HTTP response status codes, Postman validation collections, and clean Git commits.",
  },
];

const skillGroups = [
  {
    title: "Programming & Backend",
    icon: Code2,
    skills: ["Python", "SQL", "MySQL", "PostgreSQL", "Flask", "REST APIs", "SQLAlchemy"],
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    skills: [
      "Scikit-learn",
      "Classification",
      "Regression",
      "Clustering",
      "Feature Engineering",
      "Model Evaluation",
      "Cross-Validation",
    ],
  },
  {
    title: "ML Algorithms",
    icon: Cpu,
    skills: [
      "Linear / Logistic Regression",
      "Random Forest",
      "Gradient Boosting",
      "XGBoost",
      "K-Means",
      "PCA",
      "Isolation Forest",
    ],
  },
  {
    title: "Explainable AI (XAI)",
    icon: Sparkles,
    skills: ["SHAP", "LIME", "Model Interpretability", "Feature Importance", "Risk Segments"],
  },
  {
    title: "Data Analysis",
    icon: Database,
    skills: [
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Statistical Analysis",
      "SMOTE",
    ],
  },
  {
    title: "Visualization & BI",
    icon: BarChart3,
    skills: ["Matplotlib", "Seaborn", "Power BI", "Tableau", "Interactive Dashboards"],
  },
  {
    title: "Tools & Workflows",
    icon: Terminal,
    skills: ["Git", "GitHub", "Postman", "Jupyter Notebook", "Google Colab", "VS Code"],
  },
];

const certifications = [
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte · Forage",
    category: "Data Analytics & Advisory",
    description:
      "Completed practical job simulation conducting data analytics, forensic transaction analysis, and synthesizing data-driven recommendations for business leaders.",
    skills: ["Data Analytics", "Forensic Analysis", "Business Communication", "Insight Synthesis"],
  },
  {
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata · Forage",
    category: "Business Intelligence & Visualization",
    description:
      "Conducted real-world simulation designing executive data visualizations, structuring business scenario analyses, and delivering clear actionable stories for C-suite decisions.",
    skills: ["Data Storytelling", "Executive Dashboards", "Visual Analytics", "KPI Modeling"],
  },
  {
    title: "Microsoft Excel Beginners to Advance",
    issuer: "Skill Course",
    category: "Spreadsheet Analytics",
    description:
      "Comprehensive training covering complex formulas (INDEX/MATCH, XLOOKUP), dynamic pivot tables, data cleaning, automated reporting, and structured modeling.",
    skills: ["Advanced Formulas", "Pivot Tables", "Data Cleaning", "Spreadsheet Modeling"],
  },
  {
    title: "30 Days Power BI Micro Course",
    issuer: "Skill Course",
    category: "Power BI & DAX",
    description:
      "Hands-on program building end-to-end Power BI reporting solutions, dimensional modeling, calculated DAX measures, and interactive KPI dashboards.",
    skills: ["Power BI", "DAX Calculations", "Data Modeling", "Interactive Reports"],
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
    window.location.href = `mailto:singhs79094@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  };

  return (
    <main className={isLight ? "portfolio light" : "portfolio"}>
      {/* HEADER */}
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Shivam Singh home">
          S<span>.</span>S
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          {["Home", "About", "Skills", "Projects", "Certifications", "Education", "Contact"].map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setIsLight(!isLight)} aria-label="Toggle color theme">
            {isLight ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span></span> Available for opportunities
          </div>
          <p className="intro">
            Hi, I&apos;m <strong>Shivam Singh</strong>
          </p>
          <h1>
            Developing intelligent,<br />
            <em>data-driven systems.</em>
          </h1>
          <p className="hero-description">
            Computer Engineering undergraduate (7th Semester) with a strong foundation in Python, SQL, data analysis,
            and machine learning. Focused on building AI-powered applications, predictive classification pipelines, and
            explainable AI solutions to solve real-world problems.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View my projects <ArrowDownRight size={17} />
            </a>
            <a href="#contact" className="button button-quiet">
              Contact me <ChevronRight size={17} />
            </a>
          </div>
          <div className="hero-note">
            <span></span> B.E Computer Engineering &nbsp;·&nbsp; 7th Semester &nbsp;·&nbsp; GEC Palanpur
          </div>
        </div>

        <div className="data-visual" aria-label="Abstract data visualization">
          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>
          <div className="chart-card card-main">
            <div className="chart-top">
              <span>FRAUD DETECTION & CHURN ML</span>
              <i></i>
            </div>
            <div className="line-chart">
              <svg viewBox="0 0 320 126" role="img" aria-label="Rising data trend">
                <path
                  d="M5 109 C32 101 43 96 61 100 S97 69 115 80 S144 85 163 54 S199 59 215 47 S251 59 271 25 S299 30 316 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  d="M5 109 C32 101 43 96 61 100 S97 69 115 80 S144 85 163 54 S199 59 215 47 S251 59 271 25 S299 30 316 10 L316 126 L5 126 Z"
                  fill="url(#gradient)"
                  opacity=".23"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop stopColor="currentColor" />
                    <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="chart-legend">
              <span>XGBoost & 5-Fold CV</span>
              <b>~94% ROC-AUC</b>
            </div>
          </div>
          <div className="mini-card card-dot">
            <span className="pulse-dot"></span>
            <small>FEATURE PIPELINE</small>
            <b>280K+ Banking Rows</b>
          </div>
          <div className="mini-card card-stat">
            <small>EXPLAINABLE AI</small>
            <b>SHAP & LIME</b>
            <span>Interpretable Insights</span>
          </div>
          <div className="node n1"></div>
          <div className="node n2"></div>
          <div className="node n3"></div>
          <div className="node n4"></div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-shell about-section">
        <div className="section-label">01 — INTRODUCTION</div>
        <div className="about-layout">
          <div>
            <h2>
              Curious by nature.<br />
              <em>Analytical by choice.</em>
            </h2>
          </div>
          <div className="about-content">
            <p>
              I am a Computer Engineering undergraduate (7th Semester) at Government Engineering College, Palanpur, with
              a strong foundation in Python, SQL, data analysis, and machine learning.
            </p>
            <p>
              Familiar with data preprocessing, feature engineering, classification models, model evaluation, and
              explainable AI, with an interest in building AI-powered applications and practical machine learning solutions.
              Eager to apply these skills to develop intelligent, data-driven systems and solve real-world problems.
            </p>
          </div>
        </div>
        <div className="profile-card">
          <div className="profile-item">
            <span>Education</span>
            <strong>B.E — Computer Engineering (7th Sem)</strong>
          </div>
          <div className="profile-item">
            <span>Institution</span>
            <strong>Government Engineering College, Palanpur</strong>
          </div>
          <div className="profile-item">
            <span>Core Focus</span>
            <strong>Machine Learning · Explainable AI · Python & SQL</strong>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section-shell skills-section">
        <div className="section-heading">
          <div>
            <div className="section-label">02 — TOOLKIT</div>
            <h2>
              Built for <em>rigorous</em>
              <br />
              problem solving.
            </h2>
          </div>
          <p>
            A solid technical toolkit spanning programming, machine learning algorithms, data analysis, explainable AI,
            and business intelligence.
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <article className="skill-card" key={title}>
              <div className="skill-title">
                <Icon size={20} />
                <h3>{title}</h3>
              </div>
              <div className="skill-list">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOCUS / PATHWAY */}
      <section className="section-shell focus-section">
        <div className="focus-copy">
          <div className="section-label">03 — DIRECTION</div>
          <h2>
            From insight<br />
            to <em>intelligence.</em>
          </h2>
          <p>
            My engineering journey is centered on transforming raw data into high-performing, explainable machine
            learning solutions and reliable applications.
          </p>
        </div>
        <div className="pathway">
          <div>
            <span>01</span>
            <b>Data Analysis & Preprocessing</b>
            <small>EDA, cleaning, SMOTE class balancing & SQL aggregation</small>
          </div>
          <i></i>
          <div>
            <span>02</span>
            <b>Machine Learning & Modeling</b>
            <small>Feature engineering, classification, 5-fold CV & XGBoost tuning</small>
          </div>
          <i></i>
          <div>
            <span>03</span>
            <b>Explainable AI & Deployment</b>
            <small>SHAP/LIME interpretability, Flask REST APIs & Power BI dashboards</small>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section-shell projects-section">
        <div className="section-heading">
          <div>
            <div className="section-label">04 — SELECTED WORK</div>
            <h2>
              Featured<br />
              <em>projects.</em>
            </h2>
          </div>
          <p>
            Real-world machine learning and software engineering projects demonstrating end-to-end execution,
            quantified outcomes, and transparent model explanations.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span>{project.number}</span>
                <div className="project-badges">
                  <span className={`project-badge ${project.badgeType === "progress" ? "in-progress" : ""}`}>
                    {project.badge}
                  </span>
                  <button
                    onClick={() => setActiveProject(project)}
                    aria-label={`View full details for ${project.title}`}
                  >
                    <ArrowUpRight size={19} />
                  </button>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-highlights-preview">
                {project.highlights.slice(0, 2).map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              <div className="tag-list">
                {project.tags.slice(0, 6).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
                {project.tags.length > 6 && <span>+{project.tags.length - 6} more</span>}
              </div>
              <button className="details-link" onClick={() => setActiveProject(project)}>
                View full breakdown <ChevronRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="section-shell certifications-section">
        <div className="section-heading">
          <div>
            <div className="section-label">05 — CERTIFICATIONS</div>
            <h2>
              Verified<br />
              <em>credentials.</em>
            </h2>
          </div>
          <p>
            Industry simulations and practical coursework validating hands-on proficiency in analytics, executive
            dashboards, and business intelligence.
          </p>
        </div>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <article className="cert-card" key={cert.title}>
              <div className="cert-header">
                <div className="cert-icon">
                  <Award size={20} />
                </div>
                <div className="cert-meta">
                  <div className="cert-issuer">{cert.issuer}</div>
                  <h3>{cert.title}</h3>
                </div>
              </div>
              <p>{cert.description}</p>
              <div className="cert-skills">
                {cert.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="section-shell education-section">
        <div className="section-label">06 — EDUCATION</div>
        <div className="education-card">
          <div className="education-mark">
            <GraduationCap size={24} />
          </div>
          <div>
            <span>JUL 2023 – JUN 2027 &nbsp;·&nbsp; 7TH SEMESTER</span>
            <h2>Bachelor of Engineering in Computer Engineering</h2>
            <p>Government Engineering College, Palanpur, Gujarat</p>
          </div>
          <div className="education-line"></div>
          <p className="education-note">
            Rigorous engineering curriculum coupled with focused practical mastery in Python, SQL, machine learning
            algorithms, feature engineering, and explainable AI pipelines.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-shell contact-section">
        <div className="contact-intro">
          <div className="section-label">07 — CONTACT</div>
          <h2>
            Let&apos;s make<br />
            something <em>useful.</em>
          </h2>
          <p>
            I am eager to apply my machine learning, data analysis, and engineering skills to full-time roles,
            internships, or collaborative data-driven projects. Feel free to reach out directly!
          </p>
          <div className="contact-links">
            <a href="mailto:singhs79094@gmail.com">
              <Mail size={17} /> singhs79094@gmail.com
            </a>
            <a href="tel:+919558837436">
              <Phone size={17} /> +91-955-883-7436
            </a>
            <a
              href="https://www.linkedin.com/in/singhs79094"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76M5.07 18.5h2.79v-8.37H5.07v8.37Z" />
              </svg>
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/singhs79094"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
              GitHub Profile
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleContact}>
          <label>
            Name
            <input required name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input required type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea required name="message" rows={4} placeholder="Tell me about your team or project..." />
          </label>
          <button type="submit" className="button button-primary">
            Send Message <Send size={16} />
          </button>
          <small>Will open in your preferred email client directed to singhs79094@gmail.com.</small>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <a href="#home" className="brand">
          S<span>.</span>S
        </a>
        <div>
          <strong>Shivam Singh</strong>
          <p>Computer Engineering &nbsp;|&nbsp; Machine Learning &nbsp;|&nbsp; Data Analysis</p>
        </div>
        <div className="footer-links">
          <a href="mailto:singhs79094@gmail.com" aria-label="Email Shivam Singh">
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/singhs79094"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="brand-mark"
          >
            GH
          </a>
          <a
            href="https://www.linkedin.com/in/singhs79094"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="brand-mark"
          >
            in
          </a>
        </div>
        <small>© {new Date().getFullYear()} Shivam Singh. All rights reserved.</small>
      </footer>

      {/* PROJECT DETAILS MODAL */}
      {activeProject && (
        <div className="modal-backdrop" onMouseDown={() => setActiveProject(null)} role="presentation">
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-label={activeProject.title}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details">
              <X size={20} />
            </button>
            <span className="modal-number">PROJECT {activeProject.number}</span>
            <h2>{activeProject.title}</h2>

            <span className="modal-section-title">Key Accomplishments & Implementation</span>
            <ul className="modal-highlights">
              {activeProject.highlights.map((item, idx) => (
                <li key={idx}>
                  <Check size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="modal-details">
              <div>
                <span>Problem Statement</span>
                <p>{activeProject.problem}</p>
              </div>
              <div>
                <span>Technical Approach</span>
                <p>{activeProject.approach}</p>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <span>Quantified Outcome & Deliverables</span>
                <p>{activeProject.outcome}</p>
              </div>
            </div>

            <span className="modal-section-title">Technologies & Libraries</span>
            <div className="tag-list">
              {activeProject.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
