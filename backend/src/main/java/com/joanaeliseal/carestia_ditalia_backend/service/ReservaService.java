package com.joanaeliseal.carestia_ditalia_backend.service;

import com.joanaeliseal.carestia_ditalia_backend.model.Reserva;
import com.joanaeliseal.carestia_ditalia_backend.repository.ReservaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {

    private final ReservaRepository reservaRepository;

    public ReservaService(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    public Reserva criarReserva(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    public List<Reserva> listarTodas() {
        return reservaRepository.findAll();
    }

    public Optional<Reserva> buscarPorId(Long id) {
        return reservaRepository.findById(id);
    }

    public void removerReserva(Long id) {
        reservaRepository.deleteById(id);
    }
}
