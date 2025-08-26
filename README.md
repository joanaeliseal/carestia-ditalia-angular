<h1 align="center">🍝 Carestia D'Itália - Sistema Web Completo</h1>

<p align="center">
  <a href="#-sobre-a-aplicação">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#️-como-executar-o-projeto">Como Executar</a>
</p>

---

## 💻 Sobre a Aplicação

**Carestia D'Itália** é uma aplicação web desenvolvida para um restaurante fictício italiano. O projeto foi refatorado com base em uma versão estática antiga e agora está dividido em duas partes:

- **Front-end** em TypeScript + Angular v22  
- **Back-end** em Java + Spring Boot + PostgreSQL  

Essa divisão permite uma arquitetura moderna baseada em API REST, com separação entre cliente e servidor.

---

## 🚀 Funcionalidades

- Navegação entre páginas: Home, Cardápio e Contato
- Formulário reativo para reservas
- Validações com feedback visual
- Envio de reservas para API REST (com Signal de confirmação)
- Armazenamento de reservas em banco de dados PostgreSQL

---

## ✨ Tecnologias

| Front-end        | Back-end         | Banco de Dados |
|------------------|------------------|----------------|
| Angular 22       | Java 21          | PostgreSQL     |
| Bootstrap        | Spring Boot 3+   |                |
| HTML + CSS       | Spring Data JPA  |                |
| JSON-server (dev)|                  |                |

---
# 📊 Mapeamento de Requisitos: Front-end (Angular) vs Back-end (Spring Boot)

Este documento apresenta o mapeamento dos requisitos técnicos originalmente implementados com Angular (front-end) para a nova etapa do projeto com **Spring Boot (back-end)**, com foco na construção de uma **API REST real**.

## ✅ Requisitos que migraram do Front-End para o Back-End

| Requisito no Angular                                                                 | Aplicação no Spring Boot                                                                              |
|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| Uso de requisições assíncronas com `HttpClientModule` (POST para API simulada)       | Agora conectado a uma API real desenvolvida com Spring Boot.                                          |
| Simulação de API REST com JSON-server                                                | Substituído por uma API REST real com Spring Boot, com suporte a GET, POST, DELETE e persistência.   |
| Página de contato com formulário de reserva                                          | Continua no front-end, mas envia dados reais para o back-end.                                         |
| Estrutura de pastas organizada com boas práticas (`core/`, `shared/`, `pages/`)      | O back-end segue padrão de pastas como: `controller/`, `service/`, `repository/`, `model/`.          |
---
## 📋 Resumo Comparativo

| Tipo de Requisito           | Angular (Front-End)               | Spring Boot (Back-End)                        |
|----------------------------|----------------------------------|----------------------------------------------|
| Interface             | ✅                                | 🚫 (responsabilidade do front-end)           |
| Estrutura do projeto       | ✅                                | ✅ (Controller, Service, etc.)               |
| Requisição HTTP (POST)     | ✅ (simulada via JSON-server)     | ✅ (real, com persistência)                  |
| Validações e feedback UI   | ✅                                | 🚫 (validações feitas no front-end)          |
| Persistência de dados      | 🚫                                | ✅ (banco de dados com JPA)                  |
---

## ▶️ Como Executar o Projeto

### 1. Clonar os repositórios

```bash
git clone https://github.com/joanaeliseal/carestia-ditalia-angular

```

### 2. Executar o Back-end

```bash
cd carestia-ditalia-angular/backend
./mvnw spring-boot:run
```

Acesse: `http://localhost:8080/api/reservas`

### 3. Executar o Front-end

```bash
cd carestia-ditalia-angular
npm install
ng serve
```

Acesse: `http://localhost:4200`

---

## 🔗 Links

- Front-end: https://carestia-ditalia-angular.vercel.app/
- Back-end: http://localhost:8080/api/reservas

---

## 📝 Estudantes

- [Joana Elise](https://github.com/joanaeliseal)
- [Felipe Brito](https://github.com/FelipeBritoLC)