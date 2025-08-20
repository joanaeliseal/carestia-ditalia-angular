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

| Front-end       | Back-end         | Banco de Dados |
|------------------|------------------|----------------|
| Angular 17+      | Java 17+         | PostgreSQL     |
| Bootstrap        | Spring Boot 3+   | Flyway (opcional) |
| HTML + CSS       | Spring Data JPA  |                |
| JSON-server (dev)| Swagger UI (doc) |                |

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