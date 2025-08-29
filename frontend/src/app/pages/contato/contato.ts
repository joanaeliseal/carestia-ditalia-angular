import { Component, signal } from '@angular/core';
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
  //reservaConfirmada = reservaConfirmada;
  success = signal(false);
  reservas = signal<any[]>([]);

  ngOnInit(): void {
    this.carregarReservas();
  }

  carregarReservas(): void {
    this.reserva.getReservas().subscribe({
      next: (dados) => {
      console.log('Reservas carregadas:', dados); // para depuração
      this.reservas.set(dados);
    },
      error: (err) => console.error('Erro ao carregar reservas:', err)
    });
  }

  cancelarReserva(id: number): void {
    this.reserva.deletarReserva(id).subscribe({
      next: () => {
        const atualizadas = this.reservas().filter(r => r.id !== id);
        this.reservas.set(atualizadas);
      },
      error: (err) => {
        console.error('Erro ao deletar reserva:', err);
      }
    });
  }

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
      data: ['', Validators.required], // opção de selecionar uma data futura
      horario: ['', Validators.required],
      pessoas: [1, [Validators.required, Validators.min(1), Validators.max(6)]],
    });
  }

handleSubmit(): void {
  if (this.reservaForm.valid) {
    const dados = this.reservaForm.value;

    // Debug: verificar todos os dados antes do envio
    console.log('Dados da reserva:', dados);

    // Detectar se a data vem no formato yyyy-MM-dd ou dd/MM/yyyy
    let dataSelecionada: Date;

    if (dados.data.includes('/')) {
      // Formato dd/MM/yyyy
      const [dia, mes, ano] = dados.data.split('/');
      dataSelecionada = new Date(+ano, +mes - 1, +dia);
    } else {
      // Formato yyyy-MM-dd
      dataSelecionada = new Date(dados.data);
    }

    const diaSemana = dataSelecionada.getDay(); // 0 = domingo, 1 = segunda...

    // Data inválida
    if (isNaN(dataSelecionada.getTime())) {
      alert('Data inválida. Selecione uma data válida no calendário.');
      return;
    }

    // Impede reservas na segunda-feira
    if (diaSemana === 1) {
      alert('O restaurante está fechado às segundas-feiras. Escolha outro dia.');
      return;
    }

    // Campos obrigatórios faltando
    if (!dados.horario || !dados.pessoas) {
      alert('Por favor, selecione o horário e o número de pessoas.');
      return;
    }

    // Tudo ok, enviar reserva
    this.reserva.enviarReserva(dados).subscribe({
      next: () => {
        this.success.set(true);
        this.reservaForm.reset();
        this.carregarReservas(); // Atualiza os cards
      },
      error: (err) => {
        console.error('Erro ao enviar reserva:', err);
        this.success.set(false);
      }
    });
  }
}



}

