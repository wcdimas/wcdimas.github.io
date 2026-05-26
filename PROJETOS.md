# Projetos de Automação - Wescley Dimas

Este documento detalha os principais projetos de RPA e automação desenvolvidos.

---

## 🤖 1. WindBorne - Plataforma de Automação Financeira

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

## 💼 2. Sistema de Vendas Automatizado (Mesha Tecnologia)

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

## 🌐 3. NY Times Scraping Dockerizado

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
