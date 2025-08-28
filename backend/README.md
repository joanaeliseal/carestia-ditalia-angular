<h1 align="center">Carestia D'Itália (Back-end com Spring Boot)</h1>

<p align="center">
  <a href="#-sobre-o-back-end">Sobre o Back-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#️-estrutura-do-projeto">Estrutura do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#️-instalando">Instalando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#️-requisitos">Requisitos</a>
</p>

## Sobre o Back-end

Este repositório contém a **API REST** do sistema Carestia D'Itália, desenvolvida com **Java + Spring Boot**, que serve como base para o envio de reservas feitas pela aplicação Angular (front-end).

### Funcionalidades:
- Criação de reservas (endpoint POST)
- Validação de dados do formulário
- Integração com banco de dados MySQL

---

## Tecnologias

- Java 21
- Spring Boot 3+
- Spring Web
- Spring Data JPA
- MySQL
- Postman

---

## 🗂️ Estrutura do Projeto

```
src/
├── main/
│   ├── java/
│   │   └── com/carestia/
│   │       ├── CarestiaApplication.java
│   │       ├── controller/
│   │       ├── model/
│   │       ├── repository/
│   │       └── service/
│   └── resources/
│       ├── application.properties
│       └── db/migration/
└── test/
```

---

## ▶️ Instalando

```bash
git clone https://github.com/joanaeliseal/carestia-backend
cd carestia-backend
./mvnw spring-boot:run
```

API disponível em: `http://localhost:8080/api/reservas`

---

## Requisitos

- ✅ Expor endpoint `POST /api/reservas`
- ✅ Validar campos obrigatórios
- ✅ Salvar dados no MySQL
- ✅ Permitir consumo pelo front-end