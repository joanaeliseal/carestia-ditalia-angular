// Entidade que representa a tabela reserva no banco de dados.
package com.joanaeliseal.carestia_ditalia_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity // entidade JPA
@Table(name = "reservas") // Define o nome da tabela no banco
public class Reserva {

    @Id // primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto incremento (PostgreSQL)
    private Long id;
    private String nome;
    private String telefone;
    private String data;
    private String horario;
    private Integer pessoas;

    // Getters e Setters
    public Long getId() {

        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    public Integer getPessoas() {
        return pessoas;
    }

    public void setPessoas(Integer pessoas) {
        this.pessoas = pessoas;
    }
}
