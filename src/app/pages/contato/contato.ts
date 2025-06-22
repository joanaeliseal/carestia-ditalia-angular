import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReservaService } from '../../core/reserva.service';
import { reservaConfirmada } from '../../shared/signals/reserva.signal';

@Component({
  standalone: true,
  selector: 'app-contato',
  templateUrl: './contato.html',
  styleUrls: ['./contato.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class Contato {
  reservaConfirmada = reservaConfirmada;
  reservaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reserva: ReservaService
  ) {
    this.reservaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      telefone: [
        '',
        [Validators.required, Validators.pattern(/^\(?\d{2}\)?\s?\d{8,9}$/)]
      ],
      data: ['hoje', Validators.required],
      horario: ['', Validators.required],
      pessoas: [1, [Validators.required, Validators.min(1), Validators.max(6)]],
    });
  }

  handleSubmit(): void {
    if (this.reservaForm.valid) {
      const dados = this.reservaForm.value;

      this.reserva.enviarReserva(dados).subscribe({
        next: () => {
          this.reservaConfirmada.set(true);
          this.reservaForm.reset();
        },
        error: (err) => {
          console.error('Erro ao enviar reserva:', err);
          this.reservaConfirmada.set(false);
        }
      });
    }
  }
}

