# Portfolio Website - RPA Developer

🤖 Meu portfólio profissional de RPA Developer hospedado no GitHub Pages.

## 🌐 Demo

Acesse: [https://wcdimas.github.io](https://wcdimas.github.io)

## ✨ Características

- 🤖 Foco em RPA e Automação de Processos
- 📱 Design totalmente responsivo
- 🎨 Interface moderna com tema escuro
- ⚡ Animações suaves e interativas
- 🎯 Seções completas: Sobre, Habilidades RPA, Projetos de Automação, Contato
- 🔄 Menu mobile funcional
- ✉️ Formulário de contato

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (Vanilla)
- Font Awesome (ícones)

## 📝 Personalização

Para personalizar o portfólio com suas informações:

### 1. Informações Pessoais (index.html)

- **Nome e Título**: Atualizar nome e especialização em RPA
- **Links Sociais**: GitHub, LinkedIn e Email
- **Email e Contato**: Suas informações de contato

### 2. Sobre Você (index.html)

- **Descrição**: Sua experiência com RPA e automação
- **Estatísticas**: Anos de experiência, projetos e clientes

### 3. Habilidades RPA (index.html)

O portfólio já inclui habilidades específicas de RPA:
- Plataformas RPA (UiPath, Power Automate, Automation Anywhere)
- Linguagens de programação (Python, VBA, C#, JavaScript)
- Análise de Processos (BPM, Process Mining)
- IA & OCR (Document Understanding, Computer Vision)
- Integrações (APIs, SAP, Excel, Bancos de Dados)
- Gestão (Orchestrator, Azure, Git)

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

Este projeto é de código abcley Dimas - RPA Developerta-se livre para usar e modificar!

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

Desenvolvido com ❤️ por Wesley Dimas
