# Balata Advogados - Landing Page

Landing page institucional do escritório **Balata Advogados**, especializado em Direito Criminal.

## Sobre o Projeto

Site desenvolvido para captação de clientes com foco em atendimento urgente. Inclui:

- Banner de urgência com link direto para WhatsApp
- Seção de especialidades criminais (7 áreas)
- Modal de contato com formulário
- Informações de contato e localização
- Design responsivo (mobile, tablet e desktop)

## Especialidades

- Crimes contra Administração Pública
- Crimes de Violência Doméstica
- Tráfico de Drogas
- Crimes contra o Patrimônio (Roubo e Furto)
- Crimes contra a Vida (Tribunal do Júri)
- Crimes Ambientais
- Crimes Eleitorais

## Tecnologias

- **React** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (estilização)
- **shadcn/ui** (componentes)
- **Lucide React** (ícones)

## Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Entrar na pasta
cd Balata_Advogados_landing_page

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:8080`

### Build para Produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

## Estrutura do Projeto

```
src/
├── components/
│   ├── landing/
│   │   ├── Header.tsx          # Navegação
│   │   ├── Hero.tsx            # Seção principal
│   │   ├── UrgentBanner.tsx    # Banner de urgência
│   │   ├── AreasAtuacao.tsx    # Especialidades
│   │   ├── ContactModal.tsx    # Modal de contato
│   │   ├── Contato.tsx         # Seção de contato
│   │   ├── Footer.tsx          # Rodapé
│   │   └── WhatsAppButton.tsx  # Botão flutuante
│   └── ui/                     # Componentes shadcn/ui
├── pages/
│   └── Index.tsx               # Página principal
├── assets/                     # Imagens e logos
└── index.css                   # Estilos globais
```

## Contato

**Balata Advogados**

- WhatsApp: (98) 98887-7011
- Instagram: [@balata.advogados](https://instagram.com/balata.advogados)
- OAB/MA 4.913

**Endereço:**
Edifício São Luís Offices - Sala 209
Av. Senador Vitorino Freire, Nº 1, QD. 41
Areinha, São Luís/MA, CEP 65030-015
