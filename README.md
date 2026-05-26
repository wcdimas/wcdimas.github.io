# Portfolio Website - RPA Developer

🤖 Meu portfólio profissional de RPA Developer e Senior Software Engineer hospedado no GitHub Pages.

## 🌐 Demo

Acesse: [https://wcdimas.github.io](https://wcdimas.github.io)

## ✨ Características

- 🌍 **Suporte Multilíngue (PT/EN)** com detecção automática do idioma do navegador
- 🤖 Foco em RPA e Automação de Processos
- 💼 Experiência profissional detalhada com timeline interativo
- 🎓 Formação acadêmica completa (Mestrado em Física - IFT-UNESP)
- 📱 Design totalmente responsivo
- 🎨 Interface moderna com tema escuro
- ⚡ Animações suaves e interativas
- 🎯 Seções completas: Sobre, Experiência, Educação, Habilidades, Projetos, Contato
- 🔄 Menu mobile funcional
- ✉️ Formulário de contato

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (Vanilla)
- Font Awesome (ícones)

## 🌍 Internacionalização

O portfólio possui suporte completo para **Português (PT)** e **Inglês (EN)**:

### Como Funciona

1. **Detecção Automática**: O site detecta automaticamente o idioma do navegador do visitante
2. **Botão de Troca**: Botão 🌐 no header permite alternar entre PT e EN a qualquer momento
3. **Persistência**: A escolha do idioma é salva no navegador (localStorage)
4. **Tradução Completa**: Todo o conteúdo do site é traduzido, incluindo:
   - Navegação
   - Textos de seções
   - Experiência profissional
   - Formação acadêmica
   - Projetos e descrições
   - Formulário de contato

### Adicionar Novos Idiomas

Para adicionar um novo idioma, edite o arquivo `translations.js`:

```javascript
const translations = {
    pt: { /* conteúdo em português */ },
    en: { /* conteúdo em inglês */ },
    es: { /* adicione espanhol aqui */ }
};
```

## 📝 Personalização

Para personalizar o portfólio com suas informações:

### 1. Informações Pessoais (index.html)

- **Nome completo**: Wescley C. Dimas
- **Localização**: Divinópolis - MG, Brasil
- **Links Sociais**: 
  - GitHub: https://github.com/wcdimas
  - LinkedIn: https://www.linkedin.com/in/wcdimas
  - Email: wescleydecarvalho@hotmail.com
  - Telefone: +55 (37) 98404-4726

### 2. Sobre Você (index.html)

A descrição já inclui:
- Senior Software Engineer e RPA Lead
- Mestrado em Física Teórica (IFT-UNESP)
- Experiência com plataformas RPA empresariais
- Especialização em backend Python e AWS

### 3. Experiência Profissional (index.html)

Timeline já configurado com:
- **DevSignal - DART HEALTH** (Set 2025 - IFT-UNESP (2020-2024)
- **Bacharelado em Física** - UNIFEI (2016-2019)
- **Técnico em Informática** - CEFET-MG (2010-2013)

### 5. Habilidades RPA (index.html)

O portfólio já inclui habilidades atualizadas:
- Plataformas RPA: UiPath, Automation Anywhere, Power Automate, Blue Prism, OpenRPA
- Backend & Cloud: Python, AWS (EC2, CloudWatch), Dramatiq, RabbitMQ
- Programação: Python, C#, JavaScript, Ruby, SQL, Delphi
- IA & OCR: Document Understanding, Complex Parsing, Computer Vision
- Databases & APIs: PostgreSQL, Redis, Supabase, REST APIs
- DevOps & Tools: Git, Azure DevOps, CI/CD, Poetry, Clean Code, Agile

### 4. Projetos de Automação (index.html)

Substitua os projetos de exemplo pelos seus projetos reais de RPA:
- Automação de Faturamento
- Reconciliação Bancária
- Onboarding de Funcionários
- Web Scraping
- Dashboard de Monitoramento
- Processamento de Pedidos

### 5. Cores e Estilo (styles.css)

Personalize as variáveis CSS no início do arquivo (linhas 8-20):

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

### 6. Imagem de Perfil

Substitua o placeholder de imagem (linha 59) por sua foto:

```html
<img src="sua-foto.jpg" alt="Seu Nome">
```

## 🚀 Deploy

1. Faça commit das alterações:
```bash
git add .
git commit -m "Personalizar portfólio"
```

2. Envie para o GitHub:
```bash
git push origin main
```

3. Ative o GitHub Pages:
   - Vá em Settings > Pages
   - Selecione a branch `main`
   - Clique em Save

Seu site estará disponível em `https://wcdimas.github.io` em alguns minutos!

## 📧 Integração de Formulário

O formulário de contato está configurado para mostrar um alerta. Para integrá-lo com um serviço de email, você pode usar:

### Opção 1: EmailJS (Recomendado)
1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Adicione o código de integração no `script.js`

### Opção 2: Formspree
1. Crie uma conta em [Formspree](https://formspree.io/)
2. Adicione o atributo `action` no formulário

### Opção 3: Netlify Forms
1. Faça deploy no Netlify
2. Adicione `netlify` no atributo do formulário

## 🎨 Customizações Adicionais

### Remover efeito de cursor trail
Se não gostar do efeito de trilha do cursor, remova as linhas 178-215 do `script.js`.

### Adicionar mais seções
Use a estrutura existente como modelo para criar novas seções.

### Adicionar Google Analytics
Adicione o código de tracking no `<head>` do `index.html`.

## 📱 Suporte a Navegadores

- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)

## 📄 Licença

Este projeto é de código aberto. Sinta-se livre para usar e modificar!

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

## 👤 Sobre o Desenvolvedor

**Wescley C. Dimas**  
Senior Software Engineer e RPA Lead com formação em Física Teórica (Mestrado - IFT-UNESP). Especializado em arquitetura de sistemas backend e automação de processos complexos usando plataformas RPA empresariais e desenvolvimento Python/AWS.

**Experiência:**
- 5+ anos em desenvolvimento e automação
- Expertise em UiPath, Automation Anywhere, Power Automate, Blue Prism
- Backend Python com AWS, Dramatiq, RabbitMQ
- Redução de 80-90% em tempos de processamento manual

**Contato:**
- 📧 Email: wescleydecarvalho@hotmail.com
- 💼 LinkedIn: [linkedin.com/in/wcdimas](https://www.linkedin.com/in/wcdimas)
- 🐙 GitHub: [github.com/wcdimas](https://github.com/wcdimas)
- 📍 Localização: Divinópolis - MG, Brasil

---

Desenvolvido com ❤️ por Wescley Dimas
