import { Badge } from "./components/Badge";
import { Card } from "./components/Card";
import { SectionHeading } from "./components/SectionHeading";

const profileImage = `${(import.meta as any).env?.BASE_URL ?? "/"}picture.png`;

const publications = [
  {
    title: "Partial Symmetry Enforced Attention Decomposition (PSEAD)",
    subtitle:
      "A group-theoretic framework for equivariant transformers in biological systems.",
    description:
      "A structural approach to ensuring symmetry-preserving attention layers in transformer models for biological and physics-based sequence data.",
    tags: ["Equivariant Transformers", "Biological Systems", "Group Theory"],
    link: "https://arxiv.org/pdf/2507.14908",
    year: "2025",
  },
  {
    title:
      "A Comprehensive Computational Approach for Detecting Multilingual, Multicultural, and Multievent Online Polarization in English and Swahili",
    subtitle:
      "Computational social science study with multilingual signal detection for online polarization.",
    description:
      "A cross-lingual pipeline for identifying polarization patterns in English and Swahili social data using machine learning and cultural context features.",
    tags: ["Multilingual NLP", "Social Computing", "Data Science"],
    link: "https://doi.org/10.13140/RG.2.2.11612.35205",
    year: "2025",
  },
  {
    title:
      "Architecting a Scalable Recommender System: From Alternating Least Squares to Production-Ready API",
    subtitle:
      "End-to-end recommender engineering with model deployment and API integration.",
    description:
      "A scalable recommendation architecture built from collaborative filtering fundamentals to a production-ready service with real-time API endpoints.",
    tags: ["Recommender Systems", "ML Engineering", "API Design"],
    link: "https://doi.org/10.13140/RG.2.2.11106.08649",
    year: "2025",
  },
];

const projects = [
  {
    title: "Essay Writer Platform",
    description:
      "An intelligent essay writing assistant built with LangGraph, LangChain, and Google AI models, designed to generate structured, research-aware essays in multiple writing styles.",
    tech: ["LangGraph", "LangChain", "Gradio"],
    demo: "https://aims-course-service-danielayomide-git-186773437176.europe-west2.run.app/writer/",
  },
  {
    title: "Real-Time Fraud Detection System",
    description:
      "A scalable machine learning pipeline using Gradio for the interface, Dagster for orchestration, and MLflow for tracking model lifecycle in real time.",
    tech: ["Gradio", "Dagster", "MLflow"],
    demo: "https://aims-course-service-danielayomide-git-186773437176.europe-west2.run.app/fraud-app/",
  },
  {
    title: "Text Analytics and Linguistic Games Suite",
    description:
      "A text analytics suite with sentiment analysis, readability scoring, token frequency statistics, and interactive educational language games.",
    tech: ["NLP", "Python", "Text Analytics"],
    demo: "https://aims-course-service-danielayomide-git-186773437176.europe-west2.run.app/text-app/",
  },
  {
    title: "AgeArc",
    description:
      "A full-stack AI and analytics platform integrating advanced data processing, visualization, and business workflow automation through a modern frontend and scalable backend.",
    tech: ["React", "FastAPI", "Analytics"],
    demo: "https://agearc.app/",
  },
  {
    title: "i-Subscribe",
    description:
      "A subscription management and payment automation platform for digital services, built with reliable backend workflows and customer-facing frontend flows.",
    tech: ["FastAPI", "PostgreSQL", "DevOps"],
    demo: "https://i-subscribe.ng/",
  },
  {
    title: "Todoya",
    description:
      "An e-commerce and job posting platform with marketplace discovery, job matching, and secure transaction workflows.",
    tech: ["React", "FastAPI", "DevOps"],
    demo: "https://todoya.biz",
  },
  {
    title: "ICOH Portal",
    description:
      "A government-backed digital portal for information management and public engagement, designed with a secure frontend and integrated backend workflows.",
    tech: ["Frontend & Backend", "Information Management", "Public Sector"],
    demo: "https://icoh.gov.ng/",
  },
];

const experience = [
  {
    role: "Machine Learning Specialist & Software Engineer",
    organization: "Lamzytech",
    period: "2023 – Present",
    details:
      "Lead engineering and model development for AI-enabled applications, building reliable data pipelines and scalable services for production use.",
  },
  {
    role: "Research Assistant",
    organization: "University of Ibadan",
    period: "2021 – 2022",
    details:
      "Supported longitudinal social science studies with data analysis, survey design, and publication preparation for maternal health research.",
  },
  {
    role: "Research Assistant",
    organization: "Lagos State University",
    period: "2022",
    details:
      "Performed quantitative analysis and research support for a community health intervention study in Ibadan North East.",
  },
  {
    role: "Assistant Instructor",
    organization: "Lamzytech",
    period: "2024",
    details:
      "Delivered hands-on instruction in data science and machine learning to early-career students and technical workshop participants.",
  },
  {
    role: "Undergraduate Tutorial Teacher",
    organization: "University of Ibadan",
    period: "2021 – 2023",
    details:
      "Mentored cohorts in Operations Research, Calculus, and Trigonometry while supporting active learning and group problem solving.",
  },
];

const awards = [
  "Google DeepMind Scholarship",
  "Dean’s Roll of Honor",
  "Academic Excellence Award",
  "NYSC Leadership Award",
];

const skills = [
  "Quantum Computing",
  "Qiskit",
  "Python",
  "TypeScript",
  "CUDA C++",
  "MATLAB",
  "FastAPI",
  "React",
  "Machine Learning",
  "Generative AI",
];

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      {children}
    </div>
  );
}

function IconLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
    >
      <span aria-hidden="true">↗</span>
      {label}
    </a>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#hero"
            className="text-lg font-semibold tracking-tight text-slate-900"
          >
            Daniel Ayomide Olanrewaju
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-slate-900">
              About
            </a>
            <a href="#research" className="transition hover:text-slate-900">
              Research
            </a>
            <a href="#projects" className="transition hover:text-slate-900">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-slate-900">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="relative overflow-hidden px-6 py-16 sm:px-8 lg:px-10 lg:pt-24"
        >
          <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-white via-white to-slate-50" />
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="space-y-10 relative z-10">
                <div className="mx-auto flex max-w-fit items-center justify-center rounded-full border border-slate-200 bg-white p-1 shadow-soft md:mx-0 relative z-10">
                  <div className="h-28 w-28 overflow-hidden rounded-full bg-slate-100">
                    <img
                      src={profileImage}
                      alt="Daniel Ayomide Olanrewaju"
                      className="h-full w-full object-cover bg-slate-300"
                      onError={(e) => {
                        const img = e.currentTarget;
                        const base = (import.meta as any).env?.BASE_URL ?? "/";
                        const candidates = [
                          `${base}picture.png`,
                          "/picture.png",
                        ];

                        for (const next of candidates) {
                          if (img.src !== next) {
                            img.src = next;
                            return;
                          }
                        }

                        // If all fallbacks failed, keep background so the slot is still visible.
                        img.alt = `Image failed to load. last src: ${img.src}`;
                      }}
                    />
                  </div>
                </div>
                <div className="relative z-10">
  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent-500">
    AI for Science Researcher
  </p>

  <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
    Daniel Ayomide Olanrewaju
  </h1>

  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
    I build research-driven models at the intersection of
    quantum computing, generative AI, and scientific discovery.
    My work is grounded in algebraic structure, Hamiltonian
    simulation, and the design of robust machine learning
    solutions for academic and production contexts.
  </p>

  <div className="flex flex-wrap gap-3">
    <a
      href="#research"
      className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
    >
      View Research
    </a>

    <a
      href="/Daniel_Olanrewaju_CV.pdf"
      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
    >
      Download CV
    </a>
  </div>
</div>

<div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
  <IconLink
    href="https://github.com/DanielAyomide-git"
    label="GitHub"
  />

  <IconLink
    href="https://www.linkedin.com/in/daniel-ayomide-olanrewaju-922612174/"
    label="LinkedIn"
  />
</div>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Academic profile
                </p>
                <div className="mt-8 space-y-5 text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-900">
                      MSc in Mathematical Sciences (AI for Science)
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      AIMS South Africa
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Google DeepMind Scholar
                    </p>
                    <p className="mt-1 text-sm text-slate-600">2025 cohort</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Research themes
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Quantum Computing · Hamiltonian Simulation · Quantum
                      Machine Learning · Generative AI · Algebra
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-t border-slate-200 bg-slate-50 px-6 py-16 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title="About"
              description="I combine academic research with practical engineering to advance quantum computing and AI solutions for science-focused problems."
            />
            <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr]">
              <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
                <p className="text-slate-600 leading-8">
                  I am pursuing an MSc in Mathematical Sciences with
                  specialization in Artificial Intelligence for Science at AIMS
                  South Africa. My training is centered on rigorous mathematical
                  foundations, structured models, and applications of machine
                  learning to quantum systems, scientific simulation, and
                  data-driven discovery.
                </p>
                <p className="text-slate-600 leading-8">
                  I have worked across research, engineering, and teaching roles
                  to translate complex academic ideas into robust systems. My
                  objective is to drive research that is both mathematically
                  grounded and deployable in real-world scientific workflows.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                      Education
                    </p>
                    <p className="mt-3 text-slate-700">
                      AIMS South Africa · University of Ibadan
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                      Interests
                    </p>
                    <p className="mt-3 text-slate-700">
                      AI for scientific discovery · Quantum machine learning ·
                      Algebraic structure
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <SectionCard>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                    Selected research interests
                  </p>
                  <ul className="mt-5 space-y-3 text-slate-700">
                    {[
                      "Quantum Computing",
                      "Hamiltonian Simulation",
                      "Quantum Machine Learning",
                      "Generative AI",
                      "Algebra",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-accent-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SectionCard>
                <SectionCard>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                    Currently exploring
                  </p>
                  <div className="mt-5 space-y-3 text-slate-700">
                    {[
                      "Quantum machine learning",
                      "Equivariant transformers",
                      "AI for scientific discovery",
                      "Hamiltonian dynamics",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </SectionCard>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title="Research & Publications"
              description="Selected academic work and peer-facing publications covering equivariant architectures, multilingual polarization analysis, and recommender system engineering."
            />
            <div className="grid gap-6 xl:grid-cols-3">
              {publications.map((publication) => (
                <Card
                  key={publication.title}
                  title={publication.title}
                  subtitle={publication.subtitle}
                  footer={publication.year}
                >
                  <p>{publication.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {publication.tags.map((tag) => (
                      <Badge key={tag} label={tag} />
                    ))}
                  </div>
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex text-sm font-semibold text-accent-500 transition hover:text-accent-700"
                  >
                    Read publication
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="border-t border-slate-200 bg-slate-50 px-6 py-16 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title="Projects"
              description="Engineering projects and research prototypes that demonstrate my work across quantum systems, real-time ML, and applied NLP."
            />
            <div className="grid gap-6 xl:grid-cols-3">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  subtitle={project.description}
                >
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <Badge key={item} label={item} />
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                    >
                      View details
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="coming" className="px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title="Coming" description="Thesis." />
            <div className="grid gap-6 xl:grid-cols-3">
              <Card
                title="Generative Hamiltonian Simulation"
                subtitle="MSc thesis prototype in quantum simulation and generative modelling."
                footer="In progress"
              >
                <p>
                  Exploring structure-aware generative approaches to Hamiltonian
                  systems, circuit optimization, and physics-informed quantum
                  workflows for scientific discovery.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge label="Qiskit" />
                  <Badge label="Quantum Simulation" />
                  <Badge label="Generative AI" />
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="experience" className="px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title="Professional Experience"
              description="Roles in research, engineering, and teaching that have shaped my approach to building robust, research-driven solutions in both academic and production contexts."
            />
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={`${item.role}-${index}`}
                  className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft"
                >
                  <div className="absolute inset-y-6 left-6 w-0.5 bg-slate-200" />
                  <div className="ml-8 space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {item.period}
                    </p>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-slate-600">
                      {item.organization}
                    </p>
                    <p className="text-slate-600">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="awards"
          className="border-t border-slate-200 bg-slate-50 px-6 py-16 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title="Awards & Certifications"
              description="Recognition and achievement highlights from academic and community leadership programs."
            />
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {awards.map((award) => (
                <SectionCard key={award}>
                  <p className="text-base font-semibold text-slate-900">
                    {award}
                  </p>
                </SectionCard>
              ))}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <SectionCard>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Certification highlights
                </p>
                <ul className="mt-5 space-y-3 text-slate-700">
                  <li>IBM Introduction to Quantum Machine Learning</li>
                  <li>Google Quantum AI: Quantum Error Correction</li>
                  <li>University of Michigan: Python for Everybody</li>
                </ul>
              </SectionCard>
              <SectionCard>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Teaching & leadership
                </p>
                <ul className="mt-5 space-y-3 text-slate-700">
                  <li>Assistant Instructor, Lamzytech</li>
                  <li>
                    Undergraduate tutorial teaching at University of Ibadan
                  </li>
                  <li>NYSC Financial Secretary and student leadership roles</li>
                </ul>
              </SectionCard>
            </div>
          </div>
        </section>

        <section id="skills" className="px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title="Skills"
              description="Technical competencies and tooling used across research and engineering work."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-soft"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-slate-200 bg-slate-50 px-6 py-16 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title="Contact"
              description="Connect with me for academic collaborations, research inquiries, or technical opportunities."
            />
            <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft sm:grid-cols-2">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Email
                </p>
                <a
                  href="mailto:lanredaniel377@gmail.com"
                  className="block text-lg font-medium text-slate-900"
                >
                  lanredaniel377@gmail.com
                </a>
                <a
                  href="mailto:dolan@aims.ac.za"
                  className="block text-lg font-medium text-slate-900"
                >
                  dolan@aims.ac.za
                </a>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Profiles
                </p>
                <a
                  href="https://github.com/DanielAyomide-git"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-lg font-medium text-slate-900"
                >
                  GitHub / DanielAyomide-git
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-ayomide-olanrewaju-922612174/"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-lg font-medium text-slate-900"
                >
                  LinkedIn / Daniel Ayomide Olanrewaju
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500 sm:px-8 lg:px-10">
        <p>
          © {new Date().getFullYear()} Daniel Ayomide Olanrewaju
        </p>
      </footer>
    </div>
  );
}

export default App;
