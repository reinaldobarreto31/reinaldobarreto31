export interface Project {
  id: string;
  title: string;
  tagline: { pt: string; en: string };
  description: { pt: string; en: string };
  techs: string[];
  links: { github?: string; demo?: string };
  highlight?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: { pt: string; en: string };
  period: string;
  description: { pt: string; en: string };
  techs: string[];
}

export interface SkillCategory {
  id: string;
  title: { pt: string; en: string };
  iconName: string;
  skills: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    role: { pt: string; en: string };
    location: { pt: string; en: string };
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    avatarUrl: string;
  };
  summary: { pt: string; en: string };
  experiences: Experience[];
  projects: Project[];
  skills: SkillCategory[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Reinaldo Barreto",
    role: {
      pt: "Software Engineer (Full-Cycle)",
      en: "Full-Cycle Software Engineer"
    },
    location: {
      pt: "Navegantes - SC, Brasil (Disponível para Remoto)",
      en: "Navegantes - SC, Brazil (Available for Remote)"
    },
    email: "reinaldobarretosilva@gmail.com",
    phone: "+55 47 98830-2308",
    github: "https://github.com/reinaldobarreto31",
    linkedin: "https://linkedin.com/in/reinaldo-barreto-da-silva-2a4ba2116",
    avatarUrl: "https://github.com/reinaldobarreto31.png"
  },
  summary: {
    pt: "Engenheiro de Software Full-Cycle com sólida trajetória no desenvolvimento de sistemas corporativos de alta criticidade e performance. Especialista no ecossistema Java (Spring Boot) e Go (Golang), com forte domínio de práticas DevOps, SRE e infraestrutura escalável (Docker, Kubernetes, CI/CD). Experiência sólida no setor público (PRODEB), modernizando sistemas governamentais, garantindo auditoria, segurança (OAuth2, Keycloak) e resiliência de dados.",
    en: "Full-Cycle Software Engineer with a solid track record in developing high-criticality and high-performance enterprise systems. Specialist in the Java ecosystem (Spring Boot) and Go (Golang), with strong expertise in DevOps practices, SRE, and scalable infrastructure (Docker, Kubernetes, CI/CD). Solid experience in the public sector (PRODEB), modernizing government systems, ensuring auditing, security (OAuth2, Keycloak), and data resilience."
  },
  experiences: [
    {
      id: "prodeb",
      company: "PRODEB (Bahia)",
      role: {
        pt: "Analista de Sistemas e Desenvolvedor (Consultor IV)",
        en: "Systems Analyst & Developer (Consultant IV)"
      },
      period: "03/2024 - 09/2024",
      description: {
        pt: "Desenvolvimento e manutenção de soluções web e back-end para órgãos públicos estaduais. Utilização de Java, Spring Boot, Java EE, Struts JSP e Vue.js na construção e otimização de sistemas. Colaboração na arquitetura e implementação de soluções de backend escaláveis e seguras para o Governo do Estado da Bahia, otimizando fluxos de automação para modernização de sistemas públicos.",
        en: "Development and maintenance of web and back-end solutions for state public agencies. Utilization of Java, Spring Boot, Java EE, Struts JSP, and Vue.js in system construction and optimization. Collaboration on the architecture and implementation of scalable and secure backend solutions for the Bahia State Government, optimizing automation flows for the modernization of public systems."
      },
      techs: ["Java", "Spring Boot", "Java EE", "Struts JSP", "Vue.js", "APIs RESTful", "Automação"]
    },
    {
      id: "lampp",
      company: "LAMPP IT Solutions",
      role: {
        pt: "Analista de Sistemas e Desenvolvedor de Software",
        en: "Systems Analyst & Software Developer"
      },
      period: "03/2022 - 05/2022",
      description: {
        pt: "Construção de APIs REST robustas e seguras com Spring Boot, Java EE, JSP, Struts e JSF, integrando front-ends em Angular 2+ e React.js. Atuação direta na integração de sistemas críticos para a Secretaria de Segurança Pública da Bahia (SSP-BA) e Polícia Militar (PM). Desenvolvimento e auditoria do Sistema de Auditoria Interna, garantindo estrita integridade dos dados e conformidade usando Spring Security e autenticação segura com OAuth2.",
        en: "Construction of robust and secure REST APIs with Spring Boot, Java EE, JSP, Struts, and JSF, integrating Angular 2+ and React.js front-ends. Direct performance on critical systems integration for the Bahia Public Security Secretariat (SSP-BA) and Military Police (PM). Development and auditing of the Internal Audit System, ensuring strict data integrity and compliance using Spring Security and secure OAuth2 authentication."
      },
      techs: ["Spring Boot", "OAuth2", "Spring Security", "React.js", "Angular", "PostgreSQL", "Segurança Pública"]
    },
    {
      id: "edza",
      company: "EDZA Planejamento Consultoria e Informática",
      role: {
        pt: "Analista de Sistemas e Desenvolvedor de Software",
        en: "Systems Analyst & Software Developer"
      },
      period: "11/2019 - 03/2022",
      description: {
        pt: "Desenvolvimento de soluções de backend robustas em Java EE, JSP, Struts e Spring Boot para ERP Municipal de gestão pública (Tributário, Saúde, RH, Nota Fiscal Eletrônica), atendendo prefeituras de Ilhéus, Juazeiro, Candeias, Porto Seguro, Lauro de Freitas. Criação de APIs REST com integrações complexas de front-end em Angular e Vue.js. Administração do parque tecnológico e servidores Linux/Windows, garantindo disponibilidade 24/7 dos serviços críticos.",
        en: "Development of robust backend solutions in Java EE, JSP, Struts, and Spring Boot for municipal ERP in public management (Taxation, Health, HR, Electronic Invoice), serving municipal governments of Ilhéus, Juazeiro, Candeias, Porto Seguro, Lauro de Freitas. Creation of REST APIs with complex Angular and Vue.js front-end integrations. Administration of the tech park and Linux/Windows servers, ensuring 24/7 availability of critical services."
      },
      techs: ["Java EE", "Struts", "Spring Boot", "Angular", "Vue.js", "Linux/Windows", "ERP", "Sistemas Legados"]
    }
  ],
  projects: [
    {
      id: "stockwise",
      title: "StockWise",
      tagline: {
        pt: "Controle de Estoque Inteligente",
        en: "Intelligent Inventory Control"
      },
      description: {
        pt: "Plataforma avançada de controle e gestão de estoque corporativo de alto desempenho. Desenvolvida sob o conceito Full-Cycle, contendo um backend otimizado escrito em Go (Golang) e um painel administrativo reativo com React e Tailwind CSS.",
        en: "Advanced high-performance enterprise inventory management platform. Developed under the Full-Cycle concept, featuring an optimized backend written in Go (Golang) and a reactive dashboard with React and Tailwind CSS."
      },
      techs: ["Go", "React", "PostgreSQL", "Docker", "Tailwind CSS"],
      links: {
        github: "https://github.com/reinaldobarreto31"
      },
      highlight: true
    },
    {
      id: "api-cadastro",
      title: "API Cadastro",
      tagline: {
        pt: "API REST Segura com Auth JWT",
        en: "Secure REST API with JWT Auth"
      },
      description: {
        pt: "Serviço RESTful focado em segurança de dados e alta performance para cadastros de usuários. Inclui autenticação por tokens JWT expiráveis, criptografia de senhas, validações estritas de inputs e persistência estruturada em PostgreSQL.",
        en: "RESTful service focused on data security and high performance for user registrations. Includes authentication via expirable JWT tokens, password hashing, strict input validation, and structured PostgreSQL persistence."
      },
      techs: ["Node.js", "Express", "JWT", "PostgreSQL", "TypeScript"],
      links: {
        github: "https://github.com/reinaldobarreto31"
      }
    },
    {
      id: "android-kotlin",
      title: "Gestão Kotlin",
      tagline: {
        pt: "App Android de Gestão",
        en: "Kotlin Android Management App"
      },
      description: {
        pt: "Aplicativo nativo para Android focado em produtividade e gestão de tarefas em tempo real. Implementado seguindo as melhores práticas do ecossistema Android moderno com arquitetura MVVM limpa e persistência local offline com Room/SQLite.",
        en: "Native Android application focused on productivity and real-time task management. Implemented following modern Android best practices with MVVM clean architecture and offline-first Room/SQLite persistence."
      },
      techs: ["Kotlin", "Android SDK", "Room", "MVVM", "Coroutines"],
      links: {
        github: "https://github.com/reinaldobarreto31"
      }
    }
  ],
  skills: [
    {
      id: "backend",
      title: { pt: "Backend & Linguagens", en: "Backend & Languages" },
      iconName: "Code",
      skills: ["Java", "Spring Boot", "Go (Golang)", "Python", "FastAPI", "Node.js", "Express", "TypeScript"]
    },
    {
      id: "devops",
      title: { pt: "DevOps & Infraestrutura", en: "DevOps & Infrastructure" },
      iconName: "Terminal",
      skills: ["Docker", "Kubernetes", "CI/CD Pipelines", "GitHub Actions", "Linux / Shell Scripting", "Nginx", "SRE", "AWS"]
    },
    {
      id: "security",
      title: { pt: "Segurança & Dados", en: "Security & Data" },
      iconName: "Shield",
      skills: ["PostgreSQL", "SQLite", "OAuth2", "Keycloak", "JWT", "Criptografia", "Auditoria de Sistemas"]
    },
    {
      id: "frontend",
      title: { pt: "Frontend & Mobile", en: "Frontend & Mobile" },
      iconName: "Globe",
      skills: ["React", "Vue.js", "Tailwind CSS", "Kotlin", "Android SDK", "HTML5 & CSS3"]
    }
  ]
};
