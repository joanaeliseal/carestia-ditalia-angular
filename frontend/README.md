<h1 align="center">Carestia D'Itália (Front-end refatorado em Angular)</h1>

<p align="center">
  <a href="#-sobre-a-refatoração">Sobre a Refatoração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#️-estrutura-de-pastas">Estrutura de Pastas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#️-instalando">Instalando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#️-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-estudantes">Estudantes</a>
</p>

## 💻 Sobre a Refatoração

Este projeto é uma **refatoração do site do restaurante fictício "Carestia D'Itália"**, desenvolvido originalmente em HTML e CSS com Bootstrap, como parte da disciplina de Linguagem de Marcação (2023.1).

A proposta agora é **transformar o site estático em uma aplicação dinâmica com Angular**, utilizando roteamento de páginas e componentes reutilizáveis.

Objetivos principais:
- Separação de páginas com rotas (`/`, `/cardapio`, `/contato`);
- Componente de cabeçalho (`Header`) reutilizável entre todas as páginas;
- Estrutura escalável para futura adição de funcionalidades dinâmicas;
- Interface visual fiel à versão original, utilizando apenas Bootstrap como biblioteca de estilos.

---

## ✨ Tecnologias

Este projeto foi refatorado utilizando:

- [Angular Standalone](https://angular.io/guide/standalone-components)
- [Bootstrap](https://getbootstrap.com/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

---

## 🗂️ Estrutura de Pastas

```
src/
├── app/
│   ├── app.ts
│   ├── app.html
│   ├── app.routes.ts
│   ├── core/                             # (Nova) Serviços centrais
│   │   └── reserva.service.ts            # Serviço responsável por requisições HTTP de reserva
│   └── pages/
│       ├── home/
│       │   ├── home.ts
│       │   ├── home.html
│       │   └── home.css
│       ├── cardapio/
│       │   ├── cardapio.ts
│       │   ├── cardapio.html
│       │   └── cardapio.css
│       └── contato/
│           ├── contato.ts
│           ├── contato.html
│           └── contato.css
│   ├── shared/                           # Componentes reutilizáveis
│   │   ├── header/
│   │   │   ├── header.ts
│   │   │   ├── header.html
│   │   │   └── header.css
│   │   └── signals/                      # (Nova) Armazena os signals globais
│   │       └── reserva.signal.ts         # Signal para exibir confirmação de reserva
├── assets/
│   └── img/
├── styles.css
├── main.ts
└── index.html

```
---

## 📋 Requisitos

Este projeto foi desenvolvido atendendo aos seguintes requisitos propostos para a **Etapa I** da disciplina:

### ✅ Requisitos Técnicos

- ✅ Projeto com tema livre utilizando **Angular v20**
- ✅ Uso de **Components** (componentes standalone para páginas e cabeçalho reutilizável)
- ✅ Uso de **Templates** (arquivos `.html` vinculados a cada componente)
- ✅ Uso de **Rotas** com Angular Router (`/`, `/cardapio`, `/contato`)
- ✅ Uso de **Formulários Reativos** (`ReactiveFormsModule`)
- ✅ Validações no formulário com feedback visual
- ✅ Uso de **Signals** para exibir confirmação de reserva (estado reativo com `signal()`)
- ✅ Uso de requisições assíncronas com **HttpClientModule**
  - Método **POST**: envio de reservas para uma API simulada (JSON-server)
- ✅ Estrutura de pastas organizada com boas práticas:
  - `core/` para serviços
  - `shared/signals/` para gerenciamento de estado com signals
  - `pages/` para componentes de página

### ✅ Recursos Utilizados

- 💡 Simulação de API REST com [JSON-server](https://www.npmjs.com/package/json-server)
- 💡 Página de contato com formulário de reserva
- 💡 Exibição condicional de mensagem de sucesso (com signal)
- 💡 Interface fiel ao design original, utilizando apenas Bootstrap

---

## ▶️ Instalando

Você pode clonar este repositório e executar o projeto localmente com os seguintes comandos:

```bash
git clone https://github.com/joanaeliseal/carestia-ditalia-angular
cd carestia-ditalia-angular
npm install
ng serve
```

Abra no navegador: [Carestia D'Italia](https://carestia-ditalia-angular.vercel.app/)

---

## 📝 Estudantes

- [Joana Elise](https://github.com/joanaeliseal)
- [Felipe Brito](https://github.com/FelipeBritoLC)
