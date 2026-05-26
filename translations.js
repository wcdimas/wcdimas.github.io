// Translations for Portfolio Website
const translations = {
    pt: {
        // Navigation
        nav: {
            home: "Início",
            about: "Sobre",
            experience: "Experiência",
            education: "Educação",
            skills: "Habilidades",
            projects: "Projetos",
            contact: "Contato"
        },
        
        // Hero Section
        hero: {
            availableBadge: "Disponível para oportunidades",
            greeting: "Olá, sou",
            name: "Wescley Dimas",
            subtitle: "RPA Developer | Automatizando processos e otimizando resultados",
            downloadCV: "Download CV",
            cta1: "Ver Projetos",
            cta2: "Entre em Contato",
            scroll: "Role para baixo"
        },
        
        // About Section
        about: {
            title: "Sobre Mim",
            description: "Senior Software Engineer e RPA Lead com formação em Física Teórica (Mestrado - IFT-UNESP). Especializado em arquitetura de sistemas backend e automação de processos complexos usando plataformas RPA empresariais e desenvolvimento Python/AWS.",
            stat1Value: "5+",
            stat1Label: "Anos de Experiência",
            stat2Value: "80-90%",
            stat2Label: "Redução em Tempo Manual",
            stat3Value: "4+",
            stat3Label: "Plataformas RPA"
        },
        
        // Experience Section
        experience: {
            title: "Experiência Profissional",
            jobs: [
                {
                    title: "Senior Software Engineer / RPA Lead",
                    company: "DevSignal - DART HEALTH",
                    date: "Setembro 2025 - Presente",
                    location: "Nova York, EUA (Remoto)",
                    items: [
                        "Liderança técnica da subdivisão RPA, definindo arquitetura e padrões de desenvolvimento",
                        "Arquitetura e implementação de sistemas backend usando Python, Dramatiq e RabbitMQ",
                        "Gestão de infraestrutura AWS (EC2, CloudWatch) com foco em escalabilidade",
                        "Desenvolvimento e manutenção de bots RPA (UiPath, Automation Anywhere) integrados ao ecossistema backend"
                    ]
                },
                {
                    title: "RPA Developer",
                    company: "Mesha Tecnologia - FINDES",
                    date: "Abril 2025 - Março 2026",
                    location: "Vitória, ES (Remoto)",
                    items: [
                        "Desenvolvimento de soluções RPA que reduziram o tempo de processamento manual em 80-90%",
                        "Automação de processos empresariais complexos com UiPath e Power Automate",
                        "Implementação de integrações REST API e arquitetura de dados para sistemas legados",
                        "Colaboração com equipes multidisciplinares para identificar oportunidades de automação"
                    ]
                },
                {
                    title: "RPA Analyst",
                    company: "PRESTO",
                    date: "Agosto 2022 - Fevereiro 2025",
                    location: "Itaúna, MG",
                    items: [
                        "Análise e mapeamento de processos para identificação de oportunidades de automação",
                        "Desenvolvimento e manutenção de bots RPA usando UiPath e Automation Anywhere",
                        "Implementação de pipelines CI/CD para automação empresarial",
                        "Monitoramento e otimização de processos automatizados em produção"
                    ]
                },
                {
                    title: "Software Developer",
                    company: "Polinfo Informática",
                    date: "Agosto 2023 - Setembro 2024",
                    location: "Divinópolis, MG",
                    items: [
                        "Desenvolvimento de aplicações desktop usando Delphi e SQL",
                        "Manutenção e evolução de sistemas legados",
                        "Integração com bancos de dados PostgreSQL e MySQL"
                    ]
                }
            ]
        },
        
        // Education Section
        education: {
            title: "Formação Acadêmica",
            degrees: [
                {
                    degree: "Mestrado em Física",
                    institution: "IFT-UNESP",
                    date: "2020 - 2024",
                    description: "Especialização em teoria quântica de campos e mecânica estatística. Desenvolvimento de simulações computacionais e biblioteca Python para cálculos avançados."
                },
                {
                    degree: "Bacharelado em Física",
                    institution: "UNIFEI",
                    date: "2016 - 2019",
                    description: "Formação sólida em Física Computacional e Matemática. Desenvolvimento de projetos em Python para métodos numéricos e simulações."
                },
                {
                    degree: "Técnico em Informática",
                    institution: "CEFET-MG",
                    date: "2010 - 2013",
                    description: "Fundamentos em programação (Java, C/C++, PHP, JavaScript) e desenvolvimento web. Base técnica para carreira em desenvolvimento de software."
                }
            ]
        },
        
        // Skills Section
        skills: {
            title: "Habilidades & Tecnologias",
            subtitle: "Especializado em automação RPA e desenvolvimento backend",
            legend: {
                advanced: "Avançado (80%+)",
                intermediate: "Intermediário (60-79%)",
                beginner: "Básico (40-59%)"
            },
            categories: [
                {
                    title: "Plataformas RPA",
                    items: ["UiPath", "Automation Anywhere", "Power Automate", "Blue Prism", "OpenRPA"]
                },
                {
                    title: "Backend & Cloud",
                    items: ["Python", "AWS (EC2, CloudWatch)", "Dramatiq", "RabbitMQ"]
                },
                {
                    title: "Linguagens de Programação",
                    items: ["Python", "C#", "JavaScript", "Ruby", "SQL", "Delphi"]
                },
                {
                    title: "IA & OCR",
                    items: ["Document Understanding", "Complex Parsing", "Computer Vision"]
                },
                {
                    title: "Databases & APIs",
                    items: ["PostgreSQL", "Redis", "Supabase", "REST APIs"]
                },
                {
                    title: "DevOps & Tools",
                    items: ["Git", "Azure DevOps", "CI/CD", "Poetry", "Clean Code", "Agile"]
                }
            ]
        },
        
        // Projects Section
        projects: {
            title: "Projetos em Destaque",
            viewDemo: "Ver Demo",
            viewCode: "Ver Código",
            comingSoon: "Em breve",
            items: [
                {
                    title: "WindBorne",
                    description: "Pipeline ETL completo para análise financeira. Integração com Alpha Vantage API, armazenamento PostgreSQL e dashboard interativo Streamlit.",
                    tags: ["Python", "PostgreSQL", "Streamlit", "API", "ETL"]
                },
                {
                    title: "Mesha Tecnologia - Sistema Flask",
                    description: "Sistema web Flask com automação Selenium, monitoramento Watchdog, geração de relatórios PDF e envio automatizado de emails.",
                    tags: ["Flask", "Selenium", "Python", "Automation", "PDF"]
                },
                {
                    title: "NYTimes Scraping Docker",
                    description: "Sistema de web scraping dockerizado para extração e análise de artigos do New York Times com persistência de dados.",
                    tags: ["Docker", "Python", "Web Scraping", "BeautifulSoup"]
                }
            ]
        },
        
        // Contact Section
        contact: {
            title: "Entre em Contato",
            subtitle: "Estou sempre aberto a novas oportunidades e colaborações. Vamos conversar!",
            namePlaceholder: "Seu Nome",
            emailPlaceholder: "Seu E-mail",
            messagePlaceholder: "Sua Mensagem",
            sendButton: "Enviar Mensagem",
            location: "Divinópolis - MG, Brasil"
        },
        
        // Footer
        footer: {
            rights: "Todos os direitos reservados.",
            madeWith: "Feito com",
            by: "por"
        }
    },
    
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            education: "Education",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        
        // Hero Section
        hero: {
            availableBadge: "Available for opportunities",
            greeting: "Hi, I'm",
            name: "Wescley Dimas",
            subtitle: "RPA Developer | Automating processes and optimizing results",
            downloadCV: "Download CV",
            cta1: "View Projects",
            cta2: "Get in Touch",
            scroll: "Scroll down"
        },
        
        // About Section
        about: {
            title: "About Me",
            description: "Senior Software Engineer and RPA Lead with a background in Theoretical Physics (Master's - IFT-UNESP). Specialized in backend system architecture and complex process automation using enterprise RPA platforms and Python/AWS development.",
            stat1Value: "5+",
            stat1Label: "Years of Experience",
            stat2Value: "80-90%",
            stat2Label: "Reduction in Manual Time",
            stat3Value: "4+",
            stat3Label: "RPA Platforms"
        },
        
        // Experience Section
        experience: {
            title: "Professional Experience",
            jobs: [
                {
                    title: "Senior Software Engineer / RPA Lead",
                    company: "DevSignal - DART HEALTH",
                    date: "September 2025 - Present",
                    location: "New York, USA (Remote)",
                    items: [
                        "Technical leadership of RPA subdivision, defining architecture and development standards",
                        "Architecture and implementation of backend systems using Python, Dramatiq, and RabbitMQ",
                        "AWS infrastructure management (EC2, CloudWatch) with focus on scalability",
                        "Development and maintenance of RPA bots (UiPath, Automation Anywhere) integrated with backend ecosystem"
                    ]
                },
                {
                    title: "RPA Developer",
                    company: "Mesha Tecnologia - FINDES",
                    date: "April 2025 - March 2026",
                    location: "Vitória, ES (Remote)",
                    items: [
                        "Development of RPA solutions that reduced manual processing time by 80-90%",
                        "Automation of complex business processes with UiPath and Power Automate",
                        "Implementation of REST API integrations and data architecture for legacy systems",
                        "Collaboration with multidisciplinary teams to identify automation opportunities"
                    ]
                },
                {
                    title: "RPA Analyst",
                    company: "PRESTO",
                    date: "August 2022 - February 2025",
                    location: "Itaúna, MG",
                    items: [
                        "Process analysis and mapping to identify automation opportunities",
                        "Development and maintenance of RPA bots using UiPath and Automation Anywhere",
                        "Implementation of CI/CD pipelines for enterprise automation",
                        "Monitoring and optimization of automated processes in production"
                    ]
                },
                {
                    title: "Software Developer",
                    company: "Polinfo Informática",
                    date: "August 2023 - September 2024",
                    location: "Divinópolis, MG",
                    items: [
                        "Development of desktop applications using Delphi and SQL",
                        "Maintenance and evolution of legacy systems",
                        "Integration with PostgreSQL and MySQL databases"
                    ]
                }
            ]
        },
        
        // Education Section
        education: {
            title: "Academic Background",
            degrees: [
                {
                    degree: "Master's in Physics",
                    institution: "IFT-UNESP",
                    date: "2020 - 2024",
                    description: "Specialization in quantum field theory and statistical mechanics. Development of computational simulations and Python library for advanced calculations."
                },
                {
                    degree: "Bachelor's in Physics",
                    institution: "UNIFEI",
                    date: "2016 - 2019",
                    description: "Solid background in Computational Physics and Mathematics. Development of Python projects for numerical methods and simulations."
                },
                {
                    degree: "Technical Degree in IT",
                    institution: "CEFET-MG",
                    date: "2010 - 2013",
                    description: "Fundamentals in programming (Java, C/C++, PHP, JavaScript) and web development. Technical foundation for software development career."
                }
            ]
        },
        
        // Skills Section
        skills: {
            title: "Skills & Technologies",
            subtitle: "Specialized in RPA automation and backend development",
            legend: {
                advanced: "Advanced (80%+)",
                intermediate: "Intermediate (60-79%)",
                beginner: "Basic (40-59%)"
            },
            categories: [
                {
                    title: "RPA Platforms",
                    items: ["UiPath", "Automation Anywhere", "Power Automate", "Blue Prism", "OpenRPA"]
                },
                {
                    title: "Backend & Cloud",
                    items: ["Python", "AWS (EC2, CloudWatch)", "Dramatiq", "RabbitMQ"]
                },
                {
                    title: "Programming Languages",
                    items: ["Python", "C#", "JavaScript", "Ruby", "SQL", "Delphi"]
                },
                {
                    title: "AI & OCR",
                    items: ["Document Understanding", "Complex Parsing", "Computer Vision"]
                },
                {
                    title: "Databases & APIs",
                    items: ["PostgreSQL", "Redis", "Supabase", "REST APIs"]
                },
                {
                    title: "DevOps & Tools",
                    items: ["Git", "Azure DevOps", "CI/CD", "Poetry", "Clean Code", "Agile"]
                }
            ]
        },
        
        // Projects Section
        projects: {
            title: "Featured Projects",
            viewDemo: "View Demo",
            viewCode: "View Code",
            comingSoon: "Coming soon",
            items: [
                {
                    title: "WindBorne",
                    description: "Complete ETL pipeline for financial analysis. Integration with Alpha Vantage API, PostgreSQL storage, and interactive Streamlit dashboard.",
                    tags: ["Python", "PostgreSQL", "Streamlit", "API", "ETL"]
                },
                {
                    title: "Mesha Tecnologia - Flask System",
                    description: "Flask web system with Selenium automation, Watchdog monitoring, PDF report generation, and automated email sending.",
                    tags: ["Flask", "Selenium", "Python", "Automation", "PDF"]
                },
                {
                    title: "NYTimes Scraping Docker",
                    description: "Dockerized web scraping system for extracting and analyzing New York Times articles with data persistence.",
                    tags: ["Docker", "Python", "Web Scraping", "BeautifulSoup"]
                }
            ]
        },
        
        // Contact Section
        contact: {
            title: "Get in Touch",
            subtitle: "I'm always open to new opportunities and collaborations. Let's talk!",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            sendButton: "Send Message",
            location: "Divinópolis - MG, Brazil"
        },
        
        // Footer
        footer: {
            rights: "All rights reserved.",
            madeWith: "Made with",
            by: "by"
        }
    }
};
