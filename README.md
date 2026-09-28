# Antônio Carlos - Consultoria de Viagens & Roteiros Personalizados

Landing page institucional de alto padrão para consultoria de turismo e viagens nacionais sob medida, com foco em destinos exclusivos pelo Brasil, curadoria personalizada e atendimento concierge direto via WhatsApp.

---

## Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Instalação e Execução](#instalação-e-execução)
- [Boas Práticas e Segurança](#boas-práticas-e-segurança)
- [Licença e Autoria](#licença-e-autoria)

---

## Visão Geral

O projeto foi desenvolvido para transmitir sofisticação, credibilidade e exclusividade no segmento de viagens sob medida pelo Brasil. Inspirado em conceitos de hospitalidade de luxo, o layout utiliza paleta de cores refinada (tons de bronze, dourado e neutros acolhedores), tipografia editorial e composição visual assimétrica com molduras em pílula.

---

## Tecnologias Utilizadas

- **HTML5 Semântico**: Estrutura acessível, otimizada para SEO e navegação por teclado.
- **Vanilla CSS3**: 
  - Design tokens centralizados (`css/variables.css`).
  - Componentização modular (`css/components.css`).
  - Layouts por seções independentes (`css/sections.css`).
  - Responsividade fluida mobile-first (`css/responsive.css`).
- **JavaScript Moderno (ES6+)**:
  - Dados isolados de destinos (`js/destinations-data.js`).
  - Motor de filtragem dinâmica por categoria e busca (`js/filters.js`).
  - Modal concierge interativo com geração de mensagem para WhatsApp (`js/concierge-modal.js`).
  - Orquestração global e interações de interface (`js/main.js`).
- **SVG**: Ícones vetoriais leves e nítidos em qualquer resolução.

---

## Arquitetura do Projeto

Estruturado sob princípios de arquitetura limpa e separação de responsabilidades:

```
landpage-pai/
│
├── assets/
│   ├── icons/            # Ícones vetoriais SVG (WhatsApp, Instagram, Telefone, etc.)
│   └── img/              # Imagens otimizadas (destinos nacionais, foto de perfil, logo)
│
├── css/
│   ├── base.css          # Reset, fontes e regras fundamentais
│   ├── variables.css     # Design tokens (paleta de cores, tipografia, sombras, espaçamentos)
│   ├── components.css    # Botões, cards, frames, badges e modal
│   ├── sections.css      # Estilização das seções (Hero, Curadoria, Destinos, Sobre, Depoimentos)
│   └── responsive.css    # Media queries para tablets e dispositivos móveis
│
├── js/
│   ├── destinations-data.js # Camada de dados dos destinos brasileiros
│   ├── filters.js           # Lógica de busca e filtragem dos cards
│   ├── concierge-modal.js   # Regras de negócio e integração de contato
│   └── main.js              # Inicialização de scripts e eventos de interface
│
├── index.html            # Estrutura principal da landing page
├── .gitignore            # Exclusão de arquivos de sistema e temporários
└── README.md             # Documentação técnica e operacional
```

---

## Funcionalidades

1. **Curadoria de Destinos Nacionais**:
   - Catálogo com destinos distribuídos por regiões e perfis (Praias, Ecoturismo, Charme & Serra, Histórico & Cultural).
   - Filtros dinâmicos em tempo real por categoria e campo de busca textual.

2. **Atendimento Concierge & Integração WhatsApp**:
   - Modal interativo para solicitação de proposta sob medida.
   - Pré-seleção automática de destino ao clicar no card de interesse.
   - Formatação automática de mensagem pré-configurada para envio direto ao WhatsApp do consultor.

3. **Design Editorial de Alto Padrão**:
   - Microinterações suaves em botões, cards e elementos visuais.
   - Sem utilização de emojis: comunicação profissional com ícones vetoriais padronizados.
   - Aderência estrita à paleta de cores e tipografia de luxo.

---

## Instalação e Execução

Por ser uma aplicação estática construída com tecnologias web nativas, não há necessidade de instalação de dependências ou compilação.

### Execução Local

Você pode clonar o repositório e abrir diretamente o arquivo `index.html` em seu navegador ou utilizar um servidor local:

```bash
# Clonar o repositório
git clone https://github.com/LuanCarlosDev/landing-page-Ant-nio-Turismo.git

# Acessar a pasta do projeto
cd landing-page-Ant-nio-Turismo

# Iniciar servidor estático local (opção com Python)
python -m http.server 3000

# Ou opção com Node.js (npx)
npx serve .
```

Acesse no navegador: `http://localhost:3000`

---

## Boas Práticas e Segurança

- **Auditoria de Informações Sensíveis**: Nenhum token, chave de API privada ou credencial confidencial está exposta no código-fonte.
- **Configurações Centralizadas**: Os dados de contato (número de WhatsApp e Instagram) estão centralizados no arquivo `js/concierge-modal.js` para fácil manutenção.
- **Código Limpo**: Divisão clara entre dados, lógica de apresentação e estilos visuais.

---

## Autor

Desenvolvido por **Luan Carlos**.
- GitHub: [@LuanCarlosDev](https://github.com/LuanCarlosDev)
