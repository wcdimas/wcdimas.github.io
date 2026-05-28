# Projetos de Automação - Wescley Dimas

Este documento detalha os principais projetos de RPA e automação desenvolvidos.

---

## 🤖 1. Autonomous Job Seeker Agent

**Status:** ✅ Em Produção  
**Repositório:** https://github.com/wcdimas/job_seeker

### Descrição
Agente autônomo totalmente automatizado que atua como seu recrutador técnico pessoal. Ele automaticamente realiza scraping no LinkedIn em busca de vagas, usa IA da Google (Gemini) para avaliar sua adequação ao cargo, gera um CV personalizado em PDF e envia emails de candidatura altamente personalizados para recrutadores via Microsoft Graph API. Inclui um Dashboard Web elegante para monitorar todas as atividades.

### Principais Funcionalidades

#### 🔍 LinkedIn Scraper
- Usa Selenium para scroll dinâmico e extração de postagens de vagas recentes
- Filtros customizáveis por:
  - Keywords (ex: "rpa" AND "python")
  - Data de publicação (last-24-hours, past-week, past-month, etc.)
  - Localização e tipo de emprego
- Smart rate limiting para respeitar limites da plataforma

#### 🧠 Avaliação com IA (Gemini 3.1 Flash Lite)
- Análise automática de descrições de vagas contra seu currículo
- Geração de "Match Score" (pontuação de compatibilidade)
- Identificação de skills exatas que você possui
- Raciocínio detalhado do LLM sobre o fit
- Respeita quotas da API gratuita do Gemini

#### 📄 Dynamic Resume Builder
- Geração automática de CV profissional em PDF
- Personalizado para cada empresa específica
- Usa WeasyPrint para renderização de alta qualidade
- Design responsivo e moderno

#### 📧 Automated Email Outreach
- Redação de emails HTML altamente persuasivos
- Destaque automático das skills que fazem match
- Envio via Microsoft Graph API (O365/Outlook/Hotmail)
- Templates customizáveis por idioma
- Taxa de entrega otimizada

#### 📊 Web Dashboard
- Interface FastAPI + Vanilla JS elegante
- Visualização em tempo real de:
  - Todas as vagas scrapadas
  - Raciocínio do LLM para cada vaga
  - Emails gerados
  - Drafts de convites de conexão
- Responsivo para acesso via mobile
- Atualização ao vivo via polling

### Tecnologias Utilizadas
- **Backend:** Python 3.10+, FastAPI, Poetry
- **Web Scraping:** Selenium, Chrome WebDriver
- **IA:** Google Gemini API (gemini-1.5-flash)
- **PDF Generation:** WeasyPrint, GTK3
- **Email:** Microsoft Graph API (OAuth2)
- **Database:** SQLite (para logs e histórico)
- **Frontend:** Vanilla JavaScript, CSS3
- **Deploy:** Configurável para executar local ou em servidor

### Arquitetura
```
LinkedIn Scraping (Selenium)
         ↓
   Raw Job Data (JSON)
         ↓
Google Gemini Analysis → Match Score + Skills
         ↓
Resume Builder (WeasyPrint) → Custom PDF
         ↓
Email Composer (Jinja2) → HTML Email
         ↓
Microsoft Graph API → Automated Send
         ↓
   Web Dashboard (FastAPI) → Real-time Monitoring
```

### Configuração e Setup
1. **Pré-requisitos:**
   - Python 3.10+
   - Poetry para gerenciamento de dependências
   - Google Gemini API Key
   - Microsoft Azure App credentials
   - Google Chrome instalado
   - GTK3 para WeasyPrint (Windows)

2. **Instalação:**
   ```bash
   git clone https://github.com/wcdimas/job_seeker.git
   cd job_seeker
   poetry install
   ```

3. **Configuração:**
   - Copiar `.env.example` para `.env`
   - Preencher credenciais (Gemini API, Azure App, etc.)
   - Copiar `resume.example.json` para `data/resume.json`
   - Personalizar com seus dados reais

4. **Autenticação Microsoft Graph:**
   ```bash
   poetry run python tests/test_email_self.py
   ```
   - Abre URL de autorização
   - Fazer login na conta Microsoft
   - Consentir permissões
   - Colar URL de redirect no console

### Uso

#### Executar o Agente Autônomo
```bash
# Modo padrão (usa configurações do .env)
poetry run python run_job_seeker.py

# Com argumentos customizados
poetry run python run_job_seeker.py \
  --keyword '"rpa" AND "python"' \
  --date-filter "past-week" \
  --max-hours 168
```

#### Acessar o Dashboard
```bash
poetry run uvicorn src.job_seeker.web.api:app \
  --host 0.0.0.0 \
  --port 8000 \
  --reload
```
Abrir `http://localhost:8000` no navegador

### Recursos de Segurança
- `.gitignore` estrito para proteger dados sensíveis
- Pasta `data/` não é commitada (contém currículo e PDFs)
- Tokens e senhas armazenadas em `.env` (não versionado)
- OAuth2 flow seguro para Microsoft Graph
- Logs sanitizados sem credenciais

### Métricas de Impacto
- ⏱️ **Economia de Tempo:** Redução de 90%+ no tempo de busca de emprego
- 📈 **Volume:** Capacidade de processar 50+ vagas por dia
- 🎯 **Precisão:** Match scoring com IA identifica as melhores oportunidades
- 📧 **Automação:** Emails personalizados enviados automaticamente
- 📊 **Visibilidade:** Dashboard centralizado para todas as atividades

### Diferenciais Técnicos
1. **Scraping Inteligente:** Scrolling infinito com detecção de fim de página
2. **IA Contextual:** Gemini analisa fit técnico E cultural
3. **Personalização:** CVs únicos por empresa com branding consistente
4. **Rate Limiting:** Respeita limites de APIs (Gemini free tier)
5. **Monitoramento:** Dashboard real-time com logs estruturados
6. **Escalabilidade:** Arquitetura modular e extensível

### Casos de Uso
- **Candidatos em busca ativa:** Automatizar aplicações em massa
- **Networking estratégico:** Convites de conexão direcionados
- **Market research:** Análise de tendências de vagas
- **Personal branding:** CVs customizados por empresa

### Roadmap Futuro
- [ ] Integração com outros job boards (Indeed, Glassdoor)
- [ ] Sistema de follow-up automático
- [ ] Analytics avançado (taxa de resposta, melhores horários)
- [ ] Templates de email A/B testing
- [ ] Integração com calendário para entrevistas

---

## 💰 2. WindBorne - Plataforma de Automação Financeira

**Status:** ✅ Em Produção  
**Live Demo:** https://windborne-s220.onrender.com  
**Repositório:** https://github.com/wcdimas/Windborne

### Descrição
Pipeline ETL automatizado para análise de demonstrações financeiras de empresas públicas. Extrai dados da API Alpha Vantage, normaliza em PostgreSQL e calcula métricas financeiras críticas.

### Principais Funcionalidades
- **Extração Automática de Dados:** Integração com Alpha Vantage API para obter:
  - Income Statements (Demonstração de Resultados)
  - Balance Sheets (Balanço Patrimonial)
  - Cash Flow Statements (Fluxo de Caixa)
  
- **Transformação de Dados:**
  - Normalização de dados financeiros
  - Armazenamento estruturado em PostgreSQL (Supabase)
  - Cálculo automático de métricas:
    - Gross Margin % (Margem Bruta)
    - Net Margin % (Margem Líquida)
    - Revenue YoY % (Crescimento Anual de Receita)

- **Visualização Interativa:**
  - Dashboard desenvolvido em Streamlit
  - Gráficos interativos com Plotly
  - Comparação de métricas entre empresas
  - Filtros por ano e empresa

### Tecnologias Utilizadas
- **Backend:** Python 3.12, SQLAlchemy ORM
- **Banco de Dados:** PostgreSQL (Supabase)
- **Visualização:** Streamlit, Plotly
- **API:** Alpha Vantage
- **Deploy:** Render (free tier)

### Empresas Acompanhadas
- TE Connectivity (TEL)
- Sensata Technologies (ST)
- DuPont de Nemours (DD)

### Arquitetura
```
Alpha Vantage API → Extração (Python) → Raw JSON
                                         ↓
                                    PostgreSQL
                                         ↓
                                  Cálculo de Métricas
                                         ↓
                                 Dashboard Streamlit
```

### Desafios Técnicos Resolvidos
1. **Rate Limiting:** Implementação de retry logic com exponential backoff
2. **Data Normalization:** Parser robusto para diferentes formatos de API
3. **Schema Design:** Modelagem eficiente para consultas rápidas
4. **Production Monitoring:** Logs estruturados e health checks

### Métricas de Impacto
- ⏱️ Redução de 95% no tempo de análise financeira
- 📊 3 anos de dados históricos processados
- 🔄 Atualização automática mensal via n8n workflow

---

## 💼 3. Sistema de Vendas Automatizado (Mesha Tecnologia)

**Status:** ✅ Completo  
**Repositório:** https://github.com/wcdimas/Mesha-Tecnologia

### Descrição
Sistema completo de gerenciamento de vendas com automação end-to-end, incluindo monitoramento em tempo real, processamento de pagamentos, geração de relatórios e envio automatizado por e-mail.

### Principais Funcionalidades

#### 📱 Interface Web (Flask)
- Cadastro de vendas com múltiplos produtos
- Listagem e visualização de vendas
- Edição e exclusão de registros
- Sistema de logs estruturados

#### 🔍 Monitor em Tempo Real (Watchdog)
- Detecção automática de novas vendas no banco
- Disparo de ações automatizadas:
  - Geração de boleto/PIX fictício
  - Simulação de verificação de pagamento
  - Baixa automática no estoque
  - Envio de nota fiscal

#### 🤖 Automação de Cadastro (Selenium)
- Leitura de vendas de arquivo JSON
- Preenchimento automático de formulários web
- Simulação de interação humana
- Cadastro em lote de múltiplas vendas

#### 📊 Geração de Relatórios (FPDF)
- Relatórios em PDF automatizados
- Resumo diário de vendas
- Informações detalhadas por produto
- Layout profissional e estruturado

#### 📧 Envio Automático por E-mail
- Integração com Gmail SMTP
- Autenticação via App Password
- Anexo de PDF automático
- Agendamento via linha de comando

### Tecnologias Utilizadas
- **Backend:** Flask, Python 3.x
- **Automação Web:** Selenium WebDriver
- **Monitoramento:** Watchdog (File System Observer)
- **Banco de Dados:** SQLite3
- **Relatórios:** FPDF (geração de PDF)
- **E-mail:** smtplib, email (nativos do Python)

### Estrutura do Sistema

#### Tabelas do Banco de Dados
```sql
-- Produtos
CREATE TABLE produtos (
    id INTEGER PRIMARY KEY,
    nome TEXT,
    preco REAL,
    estoque INTEGER
);

-- Vendas
CREATE TABLE vendas (
    id INTEGER PRIMARY KEY,
    cliente TEXT,
    data TEXT,
    total REAL,
    status TEXT,
    pagamento_tipo TEXT,
    pagamento_confirmado BOOLEAN
);

-- Itens da Venda
CREATE TABLE itens_venda (
    id INTEGER PRIMARY KEY,
    venda_id INTEGER,
    produto_id INTEGER,
    quantidade INTEGER,
    preco_unitario REAL
);
```

#### Fluxo de Automação
```
Cadastro Web/JSON → Banco SQLite → Monitor Watchdog
                                         ↓
                                  Ações Automáticas:
                                   - Gerar Pagamento
                                   - Verificar Status
                                   - Baixar Estoque
                                   - Enviar NF
```

### Interface de Linha de Comando
```bash
# Menu Principal
1. Iniciar Sistema (Flask + Monitor)
2. Parar Sistema
3. Executar Automação de Vendas (Selenium)
4. Gerar Relatório e Enviar por E-mail
```

### Recursos Avançados
- **Logs Rotativos:** Sistema de logging com `RotatingFileHandler`
- **Validações:** Tratamento de erros e edge cases
- **Ambiente Virtual:** Setup automatizado via launcher
- **Cross-Platform:** Scripts para Windows (.bat) e Linux (.sh)

### Métricas de Impacto
- 🚀 100% de automação no fluxo de vendas
- ⚡ Redução de 90% no tempo de processamento
- 📈 Relatórios gerados em menos de 2 segundos
- ✉️ Envio automático de relatórios diários

---

## 🌐 4. NY Times Scraping Dockerizado

**Status:** ✅ Completo  
**Repositório:** https://github.com/wcdimas/nytimes-scrapping-docker

### Descrição
Sistema containerizado para extração automatizada de notícias e dados do New York Times. Utiliza Docker para garantir portabilidade e facilidade de deploy.

### Principais Funcionalidades
- **Web Scraping Robusto:** Extração de artigos, manchetes e metadados
- **Containerização:** Docker para ambiente isolado e replicável
- **Armazenamento Estruturado:** Dados organizados para análise
- **Agendamento:** Execução periódica via Docker Compose

### Tecnologias Utilizadas
- **Scraping:** Python, BeautifulSoup/Scrapy
- **Containerização:** Docker, Docker Compose
- **Armazenamento:** JSON/CSV ou banco de dados
- **Orquestração:** Docker Compose para serviços

### Arquitetura
```
Docker Container → Scraper Python → NY Times Website
                                          ↓
                                    Dados Extraídos
                                          ↓
                                  Armazenamento Local
```

### Benefícios da Containerização
- ✅ Ambiente consistente entre dev/prod
- ✅ Facilidade de escalabilidade
- ✅ Isolamento de dependências
- ✅ Deploy simplificado

---

## 🚧 Projetos em Desenvolvimento

### 4. Automação de Processos Fiscais
- **Objetivo:** Processamento automático de notas fiscais
- **Tecnologias:** Python, OCR (Tesseract/Azure), PDF parsing
- **Status:** Em desenvolvimento

### 5. Dashboard de Performance RPA
- **Objetivo:** Monitoramento em tempo real de bots
- **Tecnologias:** Power BI, Python, APIs
- **Status:** Planejado

### 6. Integração Multi-Sistema
- **Objetivo:** Sincronização de dados entre sistemas legados
- **Tecnologias:** UiPath, APIs REST, Orchestrator
- **Status:** Planejado

---

## 📈 Impacto Geral dos Projetos

### Economia de Tempo
- **Antes:** Processos manuais levavam 8+ horas/dia
- **Depois:** Automação reduz para menos de 1 hora de supervisão

### Redução de Erros
- **Antes:** Taxa de erro humano ~5-10%
- **Depois:** Taxa de erro < 1% com validações automatizadas

### ROI Estimado
- **Investimento:** Desenvolvimento e manutenção
- **Retorno:** 300-500% em 12 meses (economia de tempo + redução de erros)

---

## 🛠️ Habilidades Técnicas Demonstradas

### Linguagens
- Python (avançado)
- SQL (intermediário)
- JavaScript (básico)
- VBA (intermediário)

### Frameworks e Bibliotecas
- Flask, Streamlit (web apps)
- SQLAlchemy (ORM)
- Selenium (automação web)
- Pandas (análise de dados)
- Plotly (visualização)

### Banco de Dados
- PostgreSQL
- SQLite
- Supabase (DBaaS)

### DevOps e Ferramentas
- Docker, Docker Compose
- Git, GitHub
- Render, Vercel (deploy)
- n8n (workflow automation)

### Metodologias
- ETL (Extract, Transform, Load)
- Web Scraping ético
- API Integration
- Process Mining
- Agile/Scrum

---

## 📞 Contato

Para mais informações sobre os projetos ou colaborações:

- **GitHub:** https://github.com/wcdimas
- **LinkedIn:** https://www.linkedin.com/in/wcdimas
- **E-mail:** wescleydecarvalho@hotmail.com
- **Telefone:** +55 (37) 98404-4726
- **Localização:** Divinópolis - MG, Brasil

---

## 🎓 Sobre o Desenvolvedor

**Wescley C. Dimas**  
Senior Software Engineer e RPA Lead

### Formação Acadêmica
- **Mestrado em Física** - IFT-UNESP, São Paulo (2020-2024)
  - Especialização em teoria quântica de campos e mecânica estatística
  - Desenvolvimento de simulações e biblioteca Python
  
- **Bacharelado em Física** - UNIFEI (2016-2019)
  - Física Computacional, Matemática Avançada
  - Aplicação de Python para métodos numéricos

- **Técnico em Informática** - CEFET-MG (2010-2013)
  - Programação em Java, C/C++, HTML, PHP, JavaScript, SQL

### Experiência Profissional
- **DevSignal - DART HEALTH, NYC** (Set 2025 - Presente)
  - Senior Software Engineer / RPA Lead
  - Liderança técnica da subdivisão RPA
  - Arquitetura backend com Python, Dramatiq, RabbitMQ
  - Infraestrutura AWS (EC2, CloudWatch)

- **Mesha Tecnologia - FINDES** (Abr 2025 - Mar 2026)
  - RPA Developer
  - Redução de 80-90% no tempo de processamento manual
  - Integrações REST API e arquitetura de dados

- **PRESTO, Itaúna** (Ago 2022 - Fev 2025)
  - RPA Analyst
  - CI/CD pipelines e automação empresarial

---

**Última atualização:** Maio 2026  
**Desenvolvido por:** Wescley C. Dimas - Senior Software Engineer & RPA Lead
