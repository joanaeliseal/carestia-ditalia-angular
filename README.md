<h1 align="center">RESTAURANTE ITALIANO - Carestia D'Itália (Refatorado em Angular)</h1>

<p align="center">
  <a href="#-sobre-a-refatoração">Sobre a Refatoração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#️-estrutura-de-pastas">Estrutura de Pastas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#️-instalando">Instalando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
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
│
│   ├── core/                             # (Nova) Serviços centrais
│   │   └── reserva.service.ts            # Serviço responsável por requisições HTTP de reserva
│
│   ├── shared/                           # Componentes reutilizáveis
│   │   ├── header/
│   │   │   ├── header.component.ts
│   │   │   ├── header.component.html
│   │   │   └── header.component.css
│   │   ├── modal/                        # (Nova - opcional) Componente de modal de confirmação
│   │   │   ├── confirm-modal.component.ts
│   │   │   ├── confirm-modal.component.html
│   │   │   └── confirm-modal.component.css
│   │   └── signals/                      # (Nova) Armazena os signals globais
│   │       └── reserva.signal.ts         # Signal para exibir confirmação de reserva
│
│   └── pages/
│       ├── home/
│       │   ├── home.component.ts
│       │   ├── home.component.html
│       │   └── home.component.css
│       ├── cardapio/
│       │   ├── cardapio.component.ts
│       │   ├── cardapio.component.html
│       │   └── cardapio.component.css
│       └── contato/
│           ├── contato.component.ts
│           ├── contato.component.html
│           └── contato.component.css
│
├── assets/
│   └── img/
├── styles.css
├── main.ts
└── index.html

```

---

## ▶️ Instalando

Você pode clonar este repositório e executar o projeto localmente com os seguintes comandos:

```bash
git clone https://github.com/joanaeliseal/carestia-ditalia-angular
cd carestia-ditalia-angular
npm install
ng serve
```

Abra no navegador: [Carestia D'Italia](https://joanaeliseal.github.io/carestia-ditalia-angular/)

---

## 📝 Estudantes

- [Joana Elise](https://github.com/joanaeliseal)
- [Felipe Brito](https://github.com/FelipeBritoLC)
