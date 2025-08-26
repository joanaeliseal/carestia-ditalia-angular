package com.joanaeliseal.carestia_ditalia_backend.controller;

import com.joanaeliseal.carestia_ditalia_backend.model.Reserva;
import com.joanaeliseal.carestia_ditalia_backend.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Indica que esta classe é um controlador REST
@RequestMapping("/api/reservas") // Define o prefixo de URL para todos os endpoints
@CrossOrigin(origins = "http://localhost:4200") // Permite requisições do front-end Angular
public class ReservaController {

    @Autowired
    private ReservaService reservaService;

    // Módulo de Cadastro e Remoção (POST + DELETE)

    /**
     * Endpoint para criar uma nova reserva.
     * Mapeia requisições POST para /api/reservas.
     * Recebe um objeto Reserva no corpo da requisição.
     * Retorna a reserva salva com o ID gerado.
     */
    @PostMapping
    public Reserva criarReserva(@RequestBody Reserva reserva) {
        return reservaService.criarReserva(reserva);
    }

    /**
     * Endpoint para deletar uma reserva por ID.
     * Mapeia requisições DELETE para /api/reservas/{id}.
     * Retorna uma resposta vazia com status 204 No Content.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removerReserva(@PathVariable Long id) {
        reservaService.removerReserva(id);
        return ResponseEntity.noContent().build();
    }

    // Módulo de Visualização (GET all + GET por id)

    /**
     * Endpoint para listar todas as reservas.
     * Mapeia requisições GET para /api/reservas.
     * Retorna uma lista de todas as reservas no banco de dados.
     */
    @GetMapping
    public List<Reserva> listarTodas() {
        return reservaService.listarTodas();
    }

    /**
     * Endpoint para buscar uma reserva por ID.
     * Mapeia requisições GET para /api/reservas/{id}.
     * Retorna a reserva encontrada ou 404 Not Found se não existir.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Reserva> buscarPorId(@PathVariable Long id) {
        return reservaService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}