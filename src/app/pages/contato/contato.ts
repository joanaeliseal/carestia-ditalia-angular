import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.html',
  styleUrls: ['./contato.css']
})
export class Contato {
  nome = '';
  telefone = '';
  data = 'hoje';
  horario = '';
  pessoas = '';
}
